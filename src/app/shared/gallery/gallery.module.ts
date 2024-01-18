import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryInlineComponent } from './components/gallery-inline/gallery-inline.component';
import { GalleryLightboxComponent } from './components/gallery-lightbox/gallery-lightbox.component';
import { GalleryManagerService } from './services/gallery-manager.service';


@NgModule({
  declarations: [
    GalleryInlineComponent,
    GalleryLightboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GalleryInlineComponent,
    GalleryLightboxComponent
  ],
  providers: [
    GalleryManagerService
  ]
})
export class GalleryModule { }
