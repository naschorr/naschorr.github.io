import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '../../../../shared/gallery/gallery.module';
import { FragmentManagerService } from '../../../../shared/services/fragment-manager.service';

@Component({
  selector: 'project',
  standalone: true,
  imports: [CommonModule, GalleryModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input()
  public project!: Project
  @Input()
  public flash!: boolean;

  // Lifecycle

  constructor(
    private _FragmentManagerService: FragmentManagerService
  ) {}

  // Methods

  public onProjectClick(): void {
    this._FragmentManagerService.setFragment(this.project.id);
  }

  public onProjectHover(): void {
    // Kill the flashing if the user hovers over the specific project, since they're already (visually) focused on it.
    this.flash = false;
  }
}
