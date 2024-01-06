import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TextSwapperComponent } from '../../shared/text-swapper/text-swapper.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [TextSwapperComponent, FooterComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private _actionNouns: string[];
  private _actionNoun: string;
  private readonly DEFAULT_NOUN = "stuff";

  // Lifecycle

  constructor() {
    this._actionNouns = [
      this.DEFAULT_NOUN,
      "code",
      "projects",
      "prints"
    ];
    this._actionNoun = this.DEFAULT_NOUN;
  }

  // Properties

  get actionNouns(): string[] {
    return this._actionNouns;
  }

  get actionNoun(): string {
    return this._actionNoun;
  }

  set actionNoun(value: string) {
    if (this.actionNouns.includes(value)) {
      this._actionNoun = value;
    }
  }

  // Methods

  resetActionNoun() {
    this.actionNoun = this.DEFAULT_NOUN;
  }
}
