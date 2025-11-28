import { Component, Input } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

import { RouterModule } from '@angular/router';

@Component({
    selector: 'header',
    imports: [RouterModule, LogoComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input()
  public title: string = "";
}
