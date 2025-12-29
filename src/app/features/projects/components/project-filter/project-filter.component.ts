import { Component } from '@angular/core';
import { ProjectFilterService } from '../../services/project-filter.service';
import { CommonModule } from '@angular/common';
import { ProjectProperty } from '../../models/project-property.enum';
import { ProjectFlavor } from '../../models/project-flavor.enum';
import { PropertyFilter } from '../../models/property-filter.model';
import { BreakpointService } from '../../../../shared/services/breakpoint.service';

@Component({
  selector: 'project-filter',
  imports: [CommonModule],
  templateUrl: './project-filter.component.html',
  styleUrl: './project-filter.component.scss',
})
export class ProjectFilterComponent {
  public projectProperty = ProjectProperty;
  public projectFlavor = ProjectFlavor;
  public isCollapsed = false;
  public availablePropertyFilters: Map<string, Map<string, PropertyFilter>> = new Map();
  public selectedPropertyFilters: Set<PropertyFilter> = new Set();

  constructor(
    private _projectFilterService: ProjectFilterService,
    private _breakpointService: BreakpointService
  ) {
    this._projectFilterService.availablePropertyFilters$.subscribe((filters) => {
      this.availablePropertyFilters = this.sortFiltersByCount(filters);
    });

    this._projectFilterService.selectedPropertyFilters$.subscribe((selectedFilters) => {
      this.selectedPropertyFilters = selectedFilters;
    });

    this._breakpointService.currentBreakpoint$.subscribe(() => {
      if (this._breakpointService.isXl() || this._breakpointService.isXxl()) {
        this.isCollapsed = false;
      } else {
        this.isCollapsed = true;
      }
    });
  }

  private sortFiltersByCount(filters: Map<string, Map<string, PropertyFilter>>): Map<string, Map<string, PropertyFilter>> {
    const sortedFilters = new Map<string, Map<string, PropertyFilter>>();

    for (const [category, filterMap] of filters.entries()) {
      const sortedArray = Array.from(filterMap.entries());
      sortedArray.sort(([keyA, a], [keyB, b]) => {
        // Sort by count descending
        if (b.count !== a.count) {
          return b.count - a.count;
        }
        // If counts are equal, sort alphabetically by key
        return keyA.localeCompare(keyB);
      });

      sortedFilters.set(category, new Map(sortedArray));
    }

    return sortedFilters;
  }

  public onFilterClick(propertyFilter: PropertyFilter): void {
    this._projectFilterService.toggleFilter(propertyFilter);
  }

  public onExpandoClick(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
