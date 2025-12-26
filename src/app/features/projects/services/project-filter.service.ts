import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectLoaderService } from './project-loader.service';
import { Project } from '../models/project.model';
import { ProjectProperty } from '../models/project-property.enum';
import { PropertyFilter } from '../models/property-filter.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectFilterService {
  private _allProjects: Project[] = [];
  private _filteredProjectsSubject: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
  // Set of all available and selected project flavors and features
  private _availablePropertyFiltersSubject: BehaviorSubject<Map<string, Map<string, PropertyFilter>>> = new BehaviorSubject(new Map());
  private _selectedPropertyFiltersSubject: BehaviorSubject<Set<PropertyFilter>> = new BehaviorSubject(new Set());

  public filteredProjects$ = this._filteredProjectsSubject.asObservable();
  public availablePropertyFilters$ = this._availablePropertyFiltersSubject.asObservable();
  public selectedPropertyFilters$ = this._selectedPropertyFiltersSubject.asObservable();

  constructor(private _projectLoaderService: ProjectLoaderService) {
    this._projectLoaderService.projects$.subscribe((projects) => {
      // Reset data when projects change
      this._allProjects = projects;
      this._availablePropertyFiltersSubject.value.clear();
      this._selectedPropertyFiltersSubject.value.clear();

      // Rebuild available filter data
      projects.forEach((project: Project) => {
        this.populatePropertyFilter(ProjectProperty.FLAVOR, project.flavor);

        (project.technologies || []).forEach((tech: string) => {
          this.populatePropertyFilter(ProjectProperty.TECHNOLOGIES, tech);
        });
      });

      // Emit available filter data
      this._availablePropertyFiltersSubject.next(this._availablePropertyFiltersSubject.value);
      this._filteredProjectsSubject.next(this.applyFilters(this._allProjects));
    });
  }

  // Getters for retrieving specific PropertyFilters (case insensitive)
  public getPropertyFilterByCategoryName(category: string, name: string): PropertyFilter | null {
    const categoryLower = category.toLowerCase();
    const nameLower = name.toLowerCase();
    
    for (const [key, filterMap] of this._availablePropertyFiltersSubject.value.entries()) {
      if (key.toLowerCase() === categoryLower) {
        for (const [filterKey, filter] of filterMap.entries()) {
          if (filter.name.toLowerCase() === nameLower) {
            return filter;
          }
        }
      }
    }

    return null;
  }

  public getPropertyFilterByKey(key: string): PropertyFilter | null {
    const [category, name] = key.split('/');
    return this.getPropertyFilterByCategoryName(category, name);
  }

  public enableFilter(propertyFilter: PropertyFilter): void {
    this._selectedPropertyFiltersSubject.value.add(propertyFilter);

    this._selectedPropertyFiltersSubject.next(this._selectedPropertyFiltersSubject.value);
    this._filteredProjectsSubject.next(this.applyFilters(this._allProjects));
  }

  public disableFilter(propertyFilter: PropertyFilter): void {
    this._selectedPropertyFiltersSubject.value.delete(propertyFilter);

    this._selectedPropertyFiltersSubject.next(this._selectedPropertyFiltersSubject.value);
    this._filteredProjectsSubject.next(this.applyFilters(this._allProjects));
  }

  public onToggleFilter(propertyFilter: PropertyFilter): void {
    if (this._selectedPropertyFiltersSubject.value.has(propertyFilter)) {
      this._selectedPropertyFiltersSubject.value.delete(propertyFilter);
    } else {
      this._selectedPropertyFiltersSubject.value.add(propertyFilter);
    }

    this._selectedPropertyFiltersSubject.next(this._selectedPropertyFiltersSubject.value);
    this._filteredProjectsSubject.next(this.applyFilters(this._allProjects));
  }

  private populatePropertyFilter(category: ProjectProperty, name: string) {
    let filterMap = this._availablePropertyFiltersSubject.value.get(category);
    if (!filterMap) {
      filterMap = new Map<string, PropertyFilter>();
      this._availablePropertyFiltersSubject.value.set(category, filterMap);
    }
    let propertyFilter = filterMap.get(name);
    if (!propertyFilter) {
      propertyFilter = new PropertyFilter(category, name, 0);
      filterMap.set(name, propertyFilter);
    }
    propertyFilter.incrementCount();
  }

  private applyFilters(projects: Project[]): Project[] {
    // Handle case where no filters are selected
    if (this._selectedPropertyFiltersSubject.value.size === 0) {
      return projects;
    }

    const filtered = projects.filter((project: Project) => {
      return Array.from(this._selectedPropertyFiltersSubject.value).every((filter: PropertyFilter) => {
        const value = project[filter.category as keyof Project];

        // Normalize strings and lists of strings so we only need to check it once
        let normalizedValue = [];
        if (Array.isArray(value)) {
          normalizedValue = value;
        } else {
          normalizedValue = [value];
        }

        // Actually do the filtering
        return normalizedValue.some(value => filter.name == value);
      });
    });

    return filtered;
  }
}
