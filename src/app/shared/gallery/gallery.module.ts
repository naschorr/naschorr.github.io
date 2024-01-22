import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryInlineComponent } from './components/gallery-inline/gallery-inline.component';
import { GalleryLightboxComponent } from './components/gallery-lightbox/gallery-lightbox.component';
import { GalleryManagerService } from './services/gallery-manager.service';
import { ImageDisplayComponent } from './components/image-display/image-display.component';


@NgModule({
  declarations: [
    GalleryInlineComponent,
    GalleryLightboxComponent,
    ImageDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GalleryInlineComponent
  ],
  providers: [
    GalleryManagerService
  ]
})
export class GalleryModule { }
