
import { Component, Input } from '@angular/core';

@Component({
  selector: 'logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
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
