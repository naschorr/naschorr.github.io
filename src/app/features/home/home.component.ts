import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TextSwapperComponent } from '../../shared/text-swapper/text-swapper.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home',
  standalone: true,
  imports: [TextSwapperComponent, FooterComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private _actionNouns: string[];
  private _actionNoun: string;
  private _actionNounCycleInterval!: ReturnType<typeof setInterval>;
  private readonly DEFAULT_NOUN = "stuff";
  private readonly NOUN_CYCLE_TIME_MS = 1500;

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

  ngOnInit(): void {
    let nounIndex = 1;  // Start at 1 since it's already set to the default noun
    this._actionNounCycleInterval = setInterval(() => {
      this.actionNoun = this.actionNouns[nounIndex];
      nounIndex = (nounIndex + 1) % this.actionNouns.length;
    }, this.NOUN_CYCLE_TIME_MS);
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

  stopActionNounCycling() {
    clearInterval(this._actionNounCycleInterval);
  }
}
