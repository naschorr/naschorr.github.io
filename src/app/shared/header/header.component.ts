import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { ImageButtonComponent } from '../button/components/image-button/image-button.component';

@Component({
    selector: 'header',
    imports: [RouterModule, LogoComponent, ImageButtonComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input()
  public title: string = "";
}
