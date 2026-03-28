import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input()
  public containerClasses: string[] = [];
  @Input()
  public isContainerSized: boolean = true;
  @Input()
  public marginLeft: number | null = null;
  @Input()
  public marginRight: number | null = null;

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
