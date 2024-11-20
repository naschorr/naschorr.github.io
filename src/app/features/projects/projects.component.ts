import { CommonModule } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { Project } from './models/project.model';
import { ProjectLoaderService } from './services/project-loader.service';
import { ProjectComponent } from './components/project/project.component';
import { FragmentScrollerService } from '../../shared/services/fragment-scroller.service';
import { FragmentManagerService } from '../../shared/services/fragment-manager.service';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, AfterContentChecked {
  private _projects!: Project[];
  private _projectsChanged: boolean = false;
  private _hasScrolledToFragment: boolean = false;

  public requestedProjectId: string | null = null;

  // Lifecycle

  constructor(
      private _projectLoaderService: ProjectLoaderService,
      private _fragmentScrollerService: FragmentScrollerService,
      private _fragmentManagerService: FragmentManagerService,
      private _renderer: Renderer2,
      private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this._projectLoaderService.projects$.subscribe((projects: Project[]) => {
      this.projects = projects;
    });

    this.requestedProjectId = this._fragmentManagerService.getFragment();
  }

  ngAfterContentChecked(): void {
    this.handleProjectsChangeUpdate();

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
    this._projectsChanged = true;

    /*
      Force a change detection cycle to eventually update the projects HTML styling. Idk it doesn't work without an
      explicit change detection, and all of the other lifecycle methods don't pick up the changes either.
    */
    this._changeDetectorRef.detectChanges();
  }

  // Methods

  private handleProjectsChangeUpdate(): void {
    if (this._projectsChanged) {
      // Apply styles to dynamically loaded HTML
      const descriptionLinks = document.querySelectorAll(".description-container > p > a");
      Array.from(descriptionLinks).forEach((element: Element) => {
        this._renderer.addClass(element, "bg-gradient-feature-short");
        this._renderer.addClass(element, "clip-text");
        this._renderer.addClass(element, "font-semibold");
        this._renderer.addClass(element, "underline-feature-gradient");
      });

      this._projectsChanged = false;
    }
  }
}
