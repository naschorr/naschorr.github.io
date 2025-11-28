import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'footer',
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input()
  public isAbsolute: boolean = false;
  @Input()
  public containerClasses: string = "color-light"

  private _currentYear: number = new Date().getFullYear();
  private _infoExpanded: boolean = false;

  // Getters

  get currentYear(): number {
    return this._currentYear;
  }

  get infoExpanded(): boolean {
    return this._infoExpanded;
  }

  set infoExpanded(value: boolean) {
    this._infoExpanded = value;
  }
}
