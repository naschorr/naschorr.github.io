import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectLoaderService {
  private readonly PROJECTS_URL: string = "assets/data/projects.json";
  private _projectsSubject = new BehaviorSubject<Project[]>([]);

  public projects$ = this._projectsSubject.asObservable();

  // Lifecycle

  constructor() {
    this.loadProjects();
  }

  // Methods

  loadProjects(): void {
    fetch(this.PROJECTS_URL.toString())
      .then(response => response.json())
      .then(projects => {
        const projectModels = projects.map((project: any) => {
          return new Project(
            project.name,
            project.description,
            new URL(project?.url),
            project?.funFacts,
            project?.images?.map((image: any) => new URL(image)),
            project?.technologies
          );
        });

        this._projectsSubject.next(projectModels);
      });
  }
}
