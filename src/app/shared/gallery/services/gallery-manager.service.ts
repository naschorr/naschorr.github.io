import { Injectable } from '@angular/core';
import { GalleryModule } from '../gallery.module';

@Injectable({
  providedIn: GalleryModule
})
export class GalleryManagerService {

  constructor() { }
}
