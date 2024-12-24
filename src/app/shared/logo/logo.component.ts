import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  @Input()
  public containerClasses: string = "";
  @Input()
  public logoClasses: string = "bg-gradient-feature";
  @Input()
  public bgClasses: string = "bg-color-light";
  @Input()
  public hideBg: boolean = false;
}
