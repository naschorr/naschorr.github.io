import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '../../../../shared/gallery/gallery.module';
import { FragmentManagerService } from '../../../../shared/services/fragment-manager.service';
import { ImageButtonComponent } from '../../../../shared/button/components/image-button/image-button.component';
import { ProjectFilterService } from '../../services/project-filter.service';

@Component({
    selector: 'project',
    imports: [CommonModule, GalleryModule, ImageButtonComponent],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input()
  public project!: Project
  @Input()
  public flash!: boolean;

  private _repoLinkAttentionGrabbers: string[] = [
    "Check it out:",
    "Take a look:",
    "Learn more:",
    "Find out more:"
  ];
  private _repoLinkAttentionGrabber!: string;

  // Lifecycle

  constructor(
    private _fragmentManagerService: FragmentManagerService,
    private _projectFilterService: ProjectFilterService
  ) {
    this._repoLinkAttentionGrabber = this._chooseRepoLinkAttentionGrabber();
  }

  // Get/Set

  get repoLinkAttentionGrabber(): string {
    return this._repoLinkAttentionGrabber;
  }

  // Methods

  public onProjectClick(): void {
    this._fragmentManagerService.setFragment(this.project.id);
  }

  public onProjectHover(): void {
    // Kill the flashing if the user hovers over the specific project, since they're already (visually) focused on it.
    this.flash = false;
  }

  public onFilterHover(category: string, name: string): void {
    const propertyFilter = this._projectFilterService.getPropertyFilterByCategoryName(category, name);
    if (propertyFilter) {
      this._projectFilterService.toggleFilter(propertyFilter);
    }
  }

  private _chooseRepoLinkAttentionGrabber(): string {
    return this._repoLinkAttentionGrabbers[Math.floor(Math.random() * this._repoLinkAttentionGrabbers.length)];
  }
}
