import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'text-swapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-swapper.component.html',
  styleUrl: './text-swapper.component.scss'
})
export class TextSwapperComponent implements AfterViewInit {
  @Input()
  public swapOptions: string[] = [];
  @Input()
  public activeOption: string = "";

  private _maxWidthPx: number = 0;
  private _changeDetectorRef: ChangeDetectorRef;
  private _renderer: Renderer2;

  // Lifecycle

  constructor(
      changeDetectorRef: ChangeDetectorRef,
      renderer: Renderer2
  ) {
    this._changeDetectorRef = changeDetectorRef;
    this._renderer = renderer;
  }

  ngAfterViewInit(): void {
    // Get all of the options
    const swapOptionElements: HTMLElement[] = Array.from(document.querySelectorAll(".swap-option"));

    // Find the largest option
    let maxWidthPx = 0;
    swapOptionElements.forEach(element => {
      const width = element.offsetWidth;
      maxWidthPx = width > maxWidthPx ? width : maxWidthPx;
    });
    this.maxWidthPx = maxWidthPx;

    // Set the width of all options to the largest width
    swapOptionElements.forEach(element => {
      this._renderer.setStyle(element, "width", `${this.maxWidthPx}px`);
    });

    // Force angular to detect this change
    this._changeDetectorRef.detectChanges();
  }

  // Properties

  get maxWidthPx(): number {
    return this._maxWidthPx;
  }

  set maxWidthPx(value: number) {
    this._maxWidthPx = value;
  }
}
