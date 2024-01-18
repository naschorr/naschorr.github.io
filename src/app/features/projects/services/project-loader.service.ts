import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../models/project.model';
import { Image } from '../../../shared/gallery/models/image.model';

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
            project?.images?.map(
              (image: any) => this._buildImage(image)
            ).filter(
              (image: Image | null) => image !== null
            ),
            project?.technologies
          );
        });

        this._projectsSubject.next(projectModels);
      });
  }

  private _buildUrl(url: string): URL {
    try {
      return new URL(url);  // Handle normal URLs
    } catch (error) {
      if (error instanceof TypeError) {
        return new URL(`${location.origin}/${url}`);  // Handle relative ones too!
      } else {
        throw error;
      }
    }
  }

  private _buildImage(data: any): Image | null {
    try {
      return new Image(
        this._buildUrl(data.url),
        this._buildUrl(data.thumbnailUrl),
        data.description,
        data.altText
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
