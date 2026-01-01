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
  // Set of all, available, and selected project flavors and features
  private _allPropertyFiltersSubject: BehaviorSubject<Map<string, Map<string, PropertyFilter>>> = new BehaviorSubject(new Map());
  private _availablePropertyFiltersSubject: BehaviorSubject<Map<string, Map<string, PropertyFilter>>> = new BehaviorSubject(new Map());
  private _selectedPropertyFiltersSubject: BehaviorSubject<Set<PropertyFilter>> = new BehaviorSubject(new Set());

  public filteredProjects$ = this._filteredProjectsSubject.asObservable();
  public allPropertyFilters$ = this._allPropertyFiltersSubject.asObservable();
  public availablePropertyFilters$ = this._availablePropertyFiltersSubject.asObservable();
  public selectedPropertyFilters$ = this._selectedPropertyFiltersSubject.asObservable();

  constructor(private _projectLoaderService: ProjectLoaderService) {
    this._projectLoaderService.projects$.subscribe((projects) => {
      // Reset data when projects change
      this._allProjects = projects;
      // Create new Map instances for property filters but preserve selected filters
      this._allPropertyFiltersSubject.next(new Map());
      this._availablePropertyFiltersSubject.next(new Map());

      // Rebuild available filter data
      projects.forEach((project: Project) => {
        this.populatePropertyFilter(ProjectProperty.FLAVOR, project.flavor);

        (project.technologies || []).forEach((tech: string) => {
          this.populatePropertyFilter(ProjectProperty.TECHNOLOGIES, tech);
        });
      });

      // Emit available filter data
      this._allPropertyFiltersSubject.next(this._allPropertyFiltersSubject.value);
      this._filteredProjectsSubject.next(this.applyFiltersToProjects(this._allProjects));
      this._availablePropertyFiltersSubject.next(this.applyFiltersToPropertyFilters(this._filteredProjectsSubject.value));
    });
  }

  // Getters for retrieving specific PropertyFilters (case insensitive)
  public getPropertyFilterByCategoryName(category: string, name: string): PropertyFilter | null {
    const categoryLower = category.toLowerCase();
    const nameLower = name.toLowerCase();
    
    for (const [key, filterMap] of this._allPropertyFiltersSubject.value.entries()) {
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
    const [category, name] = key.split('-');
    return this.getPropertyFilterByCategoryName(category, name);
  }

  public enableFilter(propertyFilter: PropertyFilter): void {
    // Skip if already enabled
    if (this._selectedPropertyFiltersSubject.value.has(propertyFilter)) {
      return;
    }

    const updatedFilters = new Set(this._selectedPropertyFiltersSubject.value);
    updatedFilters.add(propertyFilter);

    this._selectedPropertyFiltersSubject.next(updatedFilters);
    this._filteredProjectsSubject.next(this.applyFiltersToProjects(this._allProjects));
    this._availablePropertyFiltersSubject.next(this.applyFiltersToPropertyFilters(this._filteredProjectsSubject.value));
  }

  public disableFilter(propertyFilter: PropertyFilter): void {
    // Skip if not enabled
    if (!this._selectedPropertyFiltersSubject.value.has(propertyFilter)) {
      return;
    }

    const updatedFilters = new Set(this._selectedPropertyFiltersSubject.value);
    updatedFilters.delete(propertyFilter);

    this._selectedPropertyFiltersSubject.next(updatedFilters);
    this._filteredProjectsSubject.next(this.applyFiltersToProjects(this._allProjects));
    this._availablePropertyFiltersSubject.next(this.applyFiltersToPropertyFilters(this._filteredProjectsSubject.value));
  }

  public toggleFilter(propertyFilter: PropertyFilter): void {
    const updatedFilters = new Set(this._selectedPropertyFiltersSubject.value);
    if (updatedFilters.has(propertyFilter)) {
      updatedFilters.delete(propertyFilter);
    } else {
      updatedFilters.add(propertyFilter);
    }

    this._selectedPropertyFiltersSubject.next(updatedFilters);
    this._filteredProjectsSubject.next(this.applyFiltersToProjects(this._allProjects));
    this._availablePropertyFiltersSubject.next(this.applyFiltersToPropertyFilters(this._filteredProjectsSubject.value));
  }

  public clearFilters(): void {
    this._selectedPropertyFiltersSubject.next(new Set());
    this._filteredProjectsSubject.next(this._allProjects);
    this._availablePropertyFiltersSubject.next(this.applyFiltersToPropertyFilters(this._allProjects));
  }

  private populatePropertyFilter(category: ProjectProperty, name: string) {
    let filterMap = this._allPropertyFiltersSubject.value.get(category);
    if (!filterMap) {
      filterMap = new Map<string, PropertyFilter>();
      this._allPropertyFiltersSubject.value.set(category, filterMap);
    }
    let propertyFilter = filterMap.get(name);
    if (!propertyFilter) {
      propertyFilter = new PropertyFilter(category, name, 0);
      filterMap.set(name, propertyFilter);
    }
    propertyFilter.incrementCount();
  }

  private applyFiltersToPropertyFilters(projects: Project[]): Map<string, Map<string, PropertyFilter>> {
    const currentFilters = this._selectedPropertyFiltersSubject.value;
    const filteredFilters: Map<string, Map<string, PropertyFilter>> = new Map();

    // Collect all available PropertyFilters from ALL projects (not just filtered)
    const availablePropertyFilters = new Set<PropertyFilter>();
    this._allProjects.forEach((project: Project) => {
      Object.values(ProjectProperty).forEach((category: string) => {
        const value = project[category as keyof Project];
        
        // Normalize strings and lists of strings
        let normalizedValue: any[] = [];
        if (Array.isArray(value)) {
          normalizedValue = value;
        } else if (value) {
          normalizedValue = [value];
        }
        
        normalizedValue.forEach((val: any) => {
          const propertyFilter = this.getPropertyFilterByCategoryName(category, val);
          if (propertyFilter) {
            availablePropertyFilters.add(propertyFilter);
          }
        });
      });
    });

    // Check each available filter to see if it would result in a non-empty list
    availablePropertyFilters.forEach((filter: PropertyFilter) => {
      // Skip filters that are already selected (they're always available)
      if (currentFilters.has(filter)) {
        let categoryFilters = filteredFilters.get(filter.category);
        if (!categoryFilters) {
          categoryFilters = new Map<string, PropertyFilter>();
          filteredFilters.set(filter.category, categoryFilters);
        }
        categoryFilters.set(filter.name, filter);
        return;
      }

      // Test if adding this filter would result in any projects
      const testFilters = new Set(currentFilters);
      testFilters.add(filter);
      
      const wouldHaveResults = this._allProjects.some((project: Project) => {
        return Array.from(testFilters).every((testFilter: PropertyFilter) => {
          const value = project[testFilter.category as keyof Project];
          
          // Normalize strings and lists of strings
          let normalizedValue = [];
          if (Array.isArray(value)) {
            normalizedValue = value;
          } else {
            normalizedValue = [value];
          }
          
          return normalizedValue.some(name => testFilter.name == name);
        });
      });

      // Only add the filter if it would result in at least one project
      if (wouldHaveResults) {
        let categoryFilters = filteredFilters.get(filter.category);
        if (!categoryFilters) {
          categoryFilters = new Map<string, PropertyFilter>();
          filteredFilters.set(filter.category, categoryFilters);
        }
        categoryFilters.set(filter.name, filter);
      }
    });

    return filteredFilters;
  }

  private applyFiltersToProjects(projects: Project[]): Project[] {
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
