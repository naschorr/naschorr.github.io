import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../models/image.model';
import { GalleryManagerService } from '../../services/gallery-manager.service';

@Component({
  selector: 'gallery-inline',
  templateUrl: './gallery-inline.component.html',
  styleUrl: './gallery-inline.component.scss'
})
export class GalleryInlineComponent implements OnInit {
  @Input()
  public images: Image[] = [];

  // Lifecycle

  constructor(private _galleryManagerService: GalleryManagerService) { }

  ngOnInit() {

  }

  // Methods

  onImageClick(image: Image, index: number) {
    // this._galleryManagerService.openLightbox(image);
  }
}
