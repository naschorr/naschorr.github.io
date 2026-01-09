import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'image-button',
    imports: [CommonModule],
    templateUrl: './image-button.component.html',
    styleUrl: './image-button.component.scss'
})
export class ImageButtonComponent {
  @Input()
  public isDark: boolean = false;

  @Input()
  public buttonFlavor: string = "button"

  @Input()
  public containerClasses: string[] = [];

  @Input()
  public textClasses: string[] = [];

  @Input()
  public contentHeight: string = "1.5rem";

  @Input()
  public imagePath!: string;

  @Input()
  public imageAltText!: string;

  @Input()
  public text!: string;
}
