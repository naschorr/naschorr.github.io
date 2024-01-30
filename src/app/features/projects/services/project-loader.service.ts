import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../models/project.model';
import { Image } from '../../../shared/models/image.model';
import { ImageTextual } from '../../../shared/models/image-textual.model';
import { ImageLoaderService } from '../../../shared/services/image-loader.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectLoaderService {
  private readonly PROJECTS_URL: string = "assets/data/projects.json";
  private _projectsSubject = new BehaviorSubject<Project[]>([]);

  public projects$ = this._projectsSubject.asObservable();

  // Lifecycle

  constructor(private _imageLoaderService: ImageLoaderService) {
    this.loadProjects();
    this._imageLoaderService.images$.subscribe(images => {
      this.loadProjects();
    });
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
            project?.url ? new URL(project?.url) : null,
            project?.funFacts,
            project?.images?.map(
              (data: any) => {
                const image = this._imageLoaderService.getImageByPath(data.url);
                if (image) {
                  return new ImageTextual(image, data.description, data.altText);
                } else {
                  return null;
                }
              }
            ).filter(
              (image: Image | null) => image !== null
            ),
            project?.technologies
          );
        });

        this._projectsSubject.next(projectModels);
      });
  }
}
