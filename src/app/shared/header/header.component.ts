import { Component, Input } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input()
  public title: string = "";

  // Lifecycle

  constructor(
      private _router: Router
  ) { }

  // Getters

  get router(): Router {
    return this._router;
  }
}
