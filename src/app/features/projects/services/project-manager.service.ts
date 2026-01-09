import { Injectable } from "@angular/core";
import { ProjectFilterService } from "./project-filter.service";
import { ProjectLoaderService } from "./project-loader.service";
import { Project } from "../models/project.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {
  private _allProjectsSubject: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
  private _filteredProjectsSubject: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);

  public allProjects$ = this._allProjectsSubject.asObservable();
  public filteredProjects$ = this._filteredProjectsSubject.asObservable();

  constructor(
    private _projectLoaderService: ProjectLoaderService,
    private _projectFilterService: ProjectFilterService
  ) {
    this._projectLoaderService.projects$.subscribe((projects: Project[]) => {
      this._allProjectsSubject.next(projects);
    });
    this._projectFilterService.filteredProjects$.subscribe((filteredProjects: Project[]) => {
      this._filteredProjectsSubject.next(filteredProjects);
    });
  }
}