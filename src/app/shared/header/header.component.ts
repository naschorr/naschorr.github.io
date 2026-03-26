import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { ImageButtonComponent } from '../button/components/image-button/image-button.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'header',
    imports: [RouterModule, LogoComponent, ImageButtonComponent, CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input()
  public title: string = "";
  @Input()
  public containerClasses: string[] = [];
  @Input()
  public marginLeft: number | null = null;
  @Input()
  public marginRight: number | null = null;
}
