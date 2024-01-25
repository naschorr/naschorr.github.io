import { ComponentRef, Injectable, Renderer2, RendererFactory2, ViewContainerRef } from '@angular/core';
import { GalleryModule } from '../gallery.module';
import { ImageTextual } from '../../../shared/models/image-textual.model';
import { BehaviorSubject } from 'rxjs';
import { GalleryLightboxComponent } from '../components/gallery-lightbox/gallery-lightbox.component';

@Injectable({
  providedIn: GalleryModule
})
export class GalleryManagerService {
  private _renderer: Renderer2;

  private _activeGallery!: ImageTextual[] | null;
  private _activeImageIndex!: number | null;
  private _activeImage!: ImageTextual | null;
  private _galleryComponent!: ComponentRef<GalleryLightboxComponent> | null;

  private _activeImageSubject = new BehaviorSubject<ImageTextual | null>(null);
  private _nextImageSubject = new BehaviorSubject<ImageTextual | null>(null);
  private _prevImageSubject = new BehaviorSubject<ImageTextual | null>(null);
  public activeImage$ = this._activeImageSubject.asObservable();
  public nextImage$ = this._nextImageSubject.asObservable();
  public prevImage$ = this._prevImageSubject.asObservable();

  // Lifecycle

  constructor(private _rendererFactory: RendererFactory2) {
    this._renderer = this._rendererFactory.createRenderer(null, null);
    this._activeGallery = null;
    this._activeImageIndex = null;
    this._activeImage = null;
  }

  // Getters and Setters

  get activeGallery(): ImageTextual[] | null {
    return this._activeGallery;
  }

  get activeImageIndex(): number | null {
    return this._activeImageIndex;
  }

  get activeImage(): ImageTextual | null {
    return this._activeImage;
  }

  private _setActiveImage(index: number | null) {
    if (index === null) {
      this._activeImage = null;
      this._activeImageSubject.next(null);
      this._nextImageSubject.next(null);
      this._prevImageSubject.next(null);
      return;
    }

    const activeImageIndex = this.calculateSafeGalleryindex(index);
    const prevImageIndex = this.calculateSafeGalleryindex(index - 1);
    const nextImageIndex = this.calculateSafeGalleryindex(index + 1);

    this._activeImage = this.activeGallery?.[activeImageIndex] ?? null;
    this._activeImageSubject.next(this._activeImage);

    const prevImage = this.activeGallery?.[prevImageIndex] ?? null;
    this._prevImageSubject.next(prevImage);

    const nextImage = this.activeGallery?.[nextImageIndex] ?? null;
    this._nextImageSubject.next(nextImage);
  }

  // Methods

  private calculateSafeGalleryindex(index: number): number {
    while (index < 0) {
      index += this.activeGallery!.length;
    }

    return index % this.activeGallery!.length;
  }

  openLightbox(image: ImageTextual, index: number, images: ImageTextual[], viewContainerRef: ViewContainerRef) {
    // Setup the context
    this._activeGallery = images;
    this._activeImageIndex = index;
    this._setActiveImage(this.activeImageIndex ?? index);

    // Generate the lightbox modal
    this._galleryComponent = viewContainerRef.createComponent(GalleryLightboxComponent);

    // Disable scrolling, so we don't scroll past the modal.
    this._renderer.addClass(document.querySelector('html'), 'overflow-y-hidden');

  }

  closeLightbox() {
    // Cleanup the context
    this._activeGallery = null;
    this._activeImageIndex = null;
    this._setActiveImage(null);


    // Destroy the lightbox modal
    this._galleryComponent?.destroy();
    this._galleryComponent = null;

    // Reenable scrolling
    this._renderer.removeClass(document.querySelector('html'), 'overflow-y-hidden');
  }

  nextImage() {
    this._stepImage(1);
  }

  prevImage() {
    this._stepImage(-1);
  }

  private _stepImage(step: number) {
    if (!this.activeGallery || this.activeImageIndex === null) {
      throw new Error('No active gallery or image index');
    }

    this._activeImageIndex = this.calculateSafeGalleryindex(this.activeImageIndex + step);
    this._setActiveImage(this.activeImageIndex);
  }
}
