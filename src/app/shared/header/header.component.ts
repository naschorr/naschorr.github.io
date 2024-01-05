import { Component, Input } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'header',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input()
  public title: string = "";
}
