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
      this.availablePropertyFilters = filters;
    });

    this._projectFilterService.selectedPropertyFilters$.subscribe((selectedFilters) => {
      this.selectedPropertyFilters = selectedFilters;
    });
  }

  // private sortFiltersByCount(filters: Map<string, Set<string>>): Map<string, Set<string>> {

  // }

  public onFilterClick(propertyFilter: PropertyFilter): void {
    this._projectFilterService.onToggleFilter(propertyFilter);
  }
}
