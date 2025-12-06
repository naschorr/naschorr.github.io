import { Component } from '@angular/core';
import { ProjectFilterService } from '../../services/project-filter.service';
import { CommonModule } from '@angular/common';
import { ProjectProperty } from '../../models/project-property.enum';
import { ProjectFlavor } from '../../models/project-flavor.enum';
import { PropertyFilter } from '../../models/property-filter.model';

@Component({
  selector: 'project-filter',
  imports: [CommonModule],
  templateUrl: './project-filter.component.html',
  styleUrl: './project-filter.component.scss',
})
export class ProjectFilterComponent {
  public projectProperty = ProjectProperty;
  public projectFlavor = ProjectFlavor;
  public availablePropertyFilters: Map<string, Map<string, PropertyFilter>> = new Map();
  public selectedPropertyFilters: Set<string> = new Set();

  constructor(private _projectFilterService: ProjectFilterService) {
    this._projectFilterService.availablePropertyFilters$.subscribe((filters) => {
      this.availablePropertyFilters = this.sortFiltersByCount(filters);
    });

    this._projectFilterService.selectedPropertyFilters$.subscribe((selectedFilters) => {
      this.selectedPropertyFilters = selectedFilters;
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
    this._projectFilterService.onToggleFilter(propertyFilter);
  }
}
