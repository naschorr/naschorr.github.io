import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '../../../../shared/gallery/gallery.module';

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
}
