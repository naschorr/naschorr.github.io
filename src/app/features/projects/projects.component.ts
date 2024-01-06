import { CommonModule } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { LogoComponent } from '../../shared/logo/logo.component';
import { Project } from './models/project.model';
import { ProjectLoaderService } from './services/project-loader.service';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, LogoComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, AfterContentChecked {
  private _projects!: Project[];
  private _projectsChanged: boolean = false;

  // Lifecycle

  constructor(
      private _projectLoaderService: ProjectLoaderService,
      private _renderer: Renderer2,
      private _changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._projectLoaderService.projects$.subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

  ngAfterContentChecked(): void {
    this.handleProjectsChangeUpdate();
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
      });

      this._projectsChanged = false;
    }
  }
}
