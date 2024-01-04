import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';

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

  private _changeDetectorRef: ChangeDetectorRef;
  private _widthPixels: number = 75; // Guess to get started

  // Lifecycle

  constructor(changeDetectorRef: ChangeDetectorRef) {
    this._changeDetectorRef = changeDetectorRef;
  }

  ngAfterViewInit() {
    let activeOption = document.querySelector<HTMLElement>(".swap-option");
    this._widthPixels = activeOption?.offsetWidth ?? this._widthPixels;

    /*
      Force a change detection here to ensure the _widthPixels is updated in the template. Otherwise there's a judder as
      it updates after some interactions (ex mouseover)
    */
    this._changeDetectorRef.detectChanges();
  }

  // Properties

  get widthPixels(): number {
    return this._widthPixels;
  }
}
