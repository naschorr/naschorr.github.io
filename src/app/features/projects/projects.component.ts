
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { Project } from './models/project.model';
import { ProjectComponent } from './components/project/project.component';
import { FragmentScrollerService } from '../../shared/services/fragment-scroller.service';
import { FragmentManagerService } from '../../shared/services/fragment-manager.service';
import { ProjectManagerService } from './services/project-manager.service';
import { ProjectFilterComponent } from "./components/project-filter/project-filter.component";
import { ActivatedRoute } from '@angular/router';
import { ProjectFilterService } from './services/project-filter.service';
import { PropertyFilter } from './models/property-filter.model';

@Component({
    selector: 'projects',
    imports: [HeaderComponent, FooterComponent, ProjectComponent, ProjectFilterComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, AfterContentChecked {
  private _availableProjectCount: number = 0;
  private _projects!: Project[];
  private _hasScrolledToFragment: boolean = false;
  private _filterQueryParams: Set<string> = new Set();

  public requestedProjectId: string | null = null;

  // Lifecycle

  constructor(
      private _route: ActivatedRoute,
      private _projectManagerService: ProjectManagerService,
      private _projectFilterService: ProjectFilterService,
      private _fragmentScrollerService: FragmentScrollerService,
      private _fragmentManagerService: FragmentManagerService
  ) { }

  ngOnInit(): void {
    // Get query params
    this._route.queryParamMap.subscribe(params => {
      const filterKeys = params.getAll('filter');
      filterKeys.forEach(key => {
        this._filterQueryParams.add(key);
      });
    });

    // Get projects and their count
    this._projectManagerService.allProjects$.subscribe((projects: Project[]) => {
      this._availableProjectCount = projects.length;
    });
    this._projectManagerService.filteredProjects$.subscribe((projects: Project[]) => {
      this.projects = projects;
    });

    // Apply filters from query params when available filters are first loaded
    this._projectFilterService.availablePropertyFilters$.subscribe((filters) => {
      if (filters.size > 0 && this._filterQueryParams.size > 0) {
        // Collect filters to enable first
        const filtersToEnable: PropertyFilter[] = [];
        this._filterQueryParams.forEach(key => {
          const propertyFilter = this._projectFilterService.getPropertyFilterByKey(key);
          if (propertyFilter) {
            filtersToEnable.push(propertyFilter);
          }
        });
        // Clear params before enabling to prevent re-entrancy
        this._filterQueryParams.clear();

        // Now enable the filters
        filtersToEnable.forEach(filter => {
          this._projectFilterService.enableFilter(filter);
        });
      }
    });

    this.requestedProjectId = this._fragmentManagerService.getFragment();
  }

  ngOnDestroy(): void {
    this._projectFilterService.clearFilters();
  }

  ngAfterContentChecked(): void {
    /*
      Unfortunately projects JSON is loaded async, so this latch is needed to ensure that the fragment is scrolled to at
      the earlist possible content draw time (but not multiple times, as clicking on different projects would cause a
      scroll to happen).
    */
    if (!this._hasScrolledToFragment) {
      this._hasScrolledToFragment = this._fragmentScrollerService.scrollToFragment();
    }
  }

  // Getters / Setters

  get projects(): Project[] {
    return this._projects;
  }

  private set projects(projects: Project[]) {
    this._projects = projects;
  }

  get availableProjectCount(): number {
    return this._availableProjectCount;
  }
}
