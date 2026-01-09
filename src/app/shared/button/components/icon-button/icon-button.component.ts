import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'icon-button',
  imports: [CommonModule, MatIconModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
})
export class IconButtonComponent {
  @Input()
  public isDark: boolean = false;

  @Input()
  public buttonFlavor: string = "button"

  @Input()
  public containerClasses: string[] = [];

  @Input()
  public iconClasses: string[] = [];

  @Input()
  public iconSize: string = "1.5rem";

  @Input()
  public iconName: string = "close";
}
