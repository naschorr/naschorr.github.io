import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class ProjectsComponent {
  private _projects: Project[] = [];

  // Lifecycle

  constructor(private _projectLoaderService: ProjectLoaderService) {
    this._projectLoaderService.projects$.subscribe((projects: Project[]) => {
      this._projects = projects;
    });
  }

  // Getters

  get projects(): Project[] {
    return this._projects;
  }
}
