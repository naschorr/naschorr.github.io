import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Image } from '../models/image.model';

type ImageMap = {
  [key: string]: Image
};

@Injectable({
  providedIn: 'root'
})
export class ImageLoaderService {
  private readonly IMAGES_DIRECTORY: string = "assets/images/";
  private readonly METADATA_JSON_FILENAME: string = "metadata.json";

  private _images: ImageMap = {};

  private _imagesSubject: BehaviorSubject<ImageMap> = new BehaviorSubject<ImageMap>({});

  public images$ = this._imagesSubject.asObservable();

  // Lifecycle

  constructor() {
    this.loadImages();
  }

  // Properties

  get images(): ImageMap {
    return this._images;
  }

  set images(images: ImageMap) {
    this._images = images;
    this._imagesSubject.next(images);
  }

  // Methods

  private _buildUrl(url: string): URL {
    try {
      return new URL(url);  // Handle normal URLs
    } catch (error) {
      if (error instanceof TypeError) {
        return new URL(`${location.origin}/${url}`);  // Handle relative ones too!
      } else {
        throw error;
      }
    }
  }

  loadImages(): void {
    fetch(this.IMAGES_DIRECTORY + this.METADATA_JSON_FILENAME)
      .then(response => response.json())
      .then(images => {
        const imageModels: ImageMap = {};

        for (let path in images) {
          const metadata = images[path];

          imageModels[path] = new Image(
            this._buildUrl(metadata.fullRes.url),
            metadata.fullRes.widthPx,
            metadata.fullRes.heightPx,
            this._buildUrl(metadata.thumbnail.url),
            metadata.thumbnail.widthPx,
            metadata.thumbnail.heightPx,
          );
        }

        this.images = imageModels;
      });
  }

  getImageByPath(path: string): Image | null {
    return this.images[path];
  }
}
