import { Component, Input } from '@angular/core';
import { Image } from '../../models/image.model';

@Component({
  selector: 'image-display',
  templateUrl: './image-display.component.html',
  styleUrl: './image-display.component.scss'
})
export class ImageDisplayComponent {
  private _image!: Image;
  private _flavor!: string;
  private _isFullResImageLoaded: boolean = false;

  // Properties

  @Input()
  set image(value: Image) {
    this._image = value;
    this._isFullResImageLoaded = false;
  }

  @Input()
  set flavor(value: string) {
    const validFlavors = ["active", "side"];

    if (validFlavors.includes(value)) {
      this._flavor = value;
    } else {
      throw new Error(`Invalid flavor value provided, must be one of '${validFlavors.join("', '")}'`);
    }
  }

  get image(): Image {
    return this._image;
  }

  get flavor(): string {
    return this._flavor;
  }

  get isFullResImageLoaded(): boolean {
    return this._isFullResImageLoaded;
  }

  // Methods

  onFullResImageLoaded() {
    this._isFullResImageLoaded = true;
  }
}
