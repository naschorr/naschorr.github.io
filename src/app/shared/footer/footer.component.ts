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
  public containerClasses: string[] = [];
  @Input()
  public isContainerSized: boolean = true;

  private _currentYear: number = new Date().getFullYear();
  private _infoExpanded: boolean = false;

  // Getters/Setters

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
