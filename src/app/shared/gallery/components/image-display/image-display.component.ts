import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ImageTextual } from '../../../../shared/models/image-textual.model';

@Component({
  selector: 'image-display',
  templateUrl: './image-display.component.html',
  styleUrl: './image-display.component.scss'
})
export class ImageDisplayComponent implements AfterViewInit {
  private _image!: ImageTextual;
  private _isFullResImageLoaded: boolean = false;
  private _imageWidth: number = 0;
  private _imageHeight: number = 0;

  @Input()
  public canLoadFullResImage: boolean = false;

  @Output()
  public fullResImageLoadedEvent = new EventEmitter<void>();

  @ViewChild('thumbnailImage')
  public thumbnailImageView!: ElementRef;
  @ViewChild('fullResImage')
  public fullResImageView!: ElementRef;

  // Lifecycle

  constructor(
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.recalculateImageHeight();
  }

  // Properties

  @Input()
  set image(value: ImageTextual) {
    this._image = value;
    this._isFullResImageLoaded = false;
  }

  get image(): ImageTextual {
    return this._image;
  }

  get isFullResImageLoaded(): boolean {
    return this._isFullResImageLoaded;
  }

  get imageWidth(): number {
    return this._imageWidth;
  }

  get imageHeight(): number {
    return this._imageHeight;
  }

  // Methods

  getActualHeightOfImagePixels(): number {
    const thumbnailHeight = this.thumbnailImageView.nativeElement.offsetHeight;
    const fullResHeight = this.fullResImageView?.nativeElement?.offsetHeight ?? 0;
    
    return Math.max(thumbnailHeight, fullResHeight);
  }

  recalculateImageHeight() {
    this._imageHeight = this.getActualHeightOfImagePixels();
    this._imageWidth = this._imageHeight * this.image.aspectRatio;
    this._changeDetectorRef.detectChanges();
  }

  onWindowResize() {
    this.recalculateImageHeight();
  }

  onFullResImageLoaded() {
    this._isFullResImageLoaded = true;
    this.fullResImageLoadedEvent.emit();

    this.recalculateImageHeight();
  }
}
