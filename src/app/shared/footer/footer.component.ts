import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer',
  standalone: true,
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

  // Getters

  get currentYear(): number {
    return this._currentYear;
  }
}
