import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Image } from '../../models/image.model';

@Component({
  selector: 'image-display',
  templateUrl: './image-display.component.html',
  styleUrl: './image-display.component.scss'
})
export class ImageDisplayComponent implements AfterViewInit {
  private _image!: Image;
  private _isFullResImageLoaded: boolean = false;
  private _imageWidth: number = 0;
  private _imageHeight: number = 0;

  @Input()
  public canLoadFullResImage: boolean = false;

  @Output()
  public fullResImageLoadedEvent = new EventEmitter<void>();
  @Output()
  public widthSetEvent = new EventEmitter<number>();

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
    this.recalculateImageWidth();
  }

  // Properties

  @Input()
  set image(value: Image) {
    this._image = value;
    this._isFullResImageLoaded = false;
  }

  get image(): Image {
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

  getActualWidthOfImagePixels(): number {
    const thumbnailWidth = this.thumbnailImageView.nativeElement.offsetWidth;
    const fullResWidth = this.fullResImageView?.nativeElement?.offsetWidth ?? 0;
    
    return Math.max(thumbnailWidth, fullResWidth);
  }

  getActualHeightOfImagePixels(): number {
    const thumbnailHeight = this.thumbnailImageView.nativeElement.offsetHeight;
    const fullResHeight = this.fullResImageView?.nativeElement?.offsetHeight ?? 0;
    
    return Math.max(thumbnailHeight, fullResHeight);
  }

  recalculateImageWidth() {
    this._imageWidth = this.getActualWidthOfImagePixels();
    this._changeDetectorRef.detectChanges();
    this.widthSetEvent.emit(this.imageWidth);
  }

  recalculateImageHeight() {
    this._imageHeight = this.getActualHeightOfImagePixels();
    this._changeDetectorRef.detectChanges();
  }

  onWindowResize() {
    this.recalculateImageHeight();
    this.recalculateImageWidth();
  }

  onFullResImageLoaded() {
    this._isFullResImageLoaded = true;
    this.fullResImageLoadedEvent.emit();

    this.recalculateImageHeight();
    this.recalculateImageWidth();
  }
}
