import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ImageTextual } from '../../../../shared/models/image-textual.model';
import { GalleryManagerService } from '../../services/gallery-manager.service';

@Component({
    selector: 'gallery-inline',
    templateUrl: './gallery-inline.component.html',
    styleUrl: './gallery-inline.component.scss',
    standalone: false
})
export class GalleryInlineComponent implements OnInit {
  @Input()
  public images: ImageTextual[] = [];

  // Lifecycle

  constructor(
    private _galleryManagerService: GalleryManagerService,
    private _viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {

  }

  // Methods

  onThumbnailImageLoaded(image: ImageTextual) {
    image.thumbnailLoaded = true;
  }

  onImageClick(image: ImageTextual, index: number) {
    this._galleryManagerService.openLightbox(image, index, this.images, this._viewContainerRef);
  }
}
