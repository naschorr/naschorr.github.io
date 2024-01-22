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
  private _imageHeight: number = 0;

  @Input()
  public canLoadFullResImage: boolean = false;

  @Output()
  public fullResImageLoadedEvent = new EventEmitter<void>();

  @ViewChild('thumnailImage')
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
