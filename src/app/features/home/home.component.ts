import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TextSwapperComponent } from '../../shared/text-swapper/text-swapper.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../shared/logo/logo.component';
import { ImageButtonComponent } from '../../shared/button/components/image-button/image-button.component';
import { LinkFlavor } from './enums/link-flavor.enum';

@Component({
  selector: 'home',
  standalone: true,
  imports: [TextSwapperComponent, FooterComponent, CommonModule, RouterModule, LogoComponent, ImageButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private _taglineMap!: {};
  private _taglineCycleInterval!: ReturnType<typeof setInterval>;
  private readonly DEFAULT_TAGLINE = "makes stuff";
  private readonly NOUN_CYCLE_TIME_MS = 1500;

  // Lifecycle

  constructor() {
    this._taglineMap = {
      [LinkFlavor.CODE]: [
        "writes code",
        "designs tools",
        "writes docs"
      ],
      [LinkFlavor.PORTFOLIO]: [
        "designs projects",
        "solves problems",
        "builds solutions"
      ],
      [LinkFlavor.PRINT]: [
        "makes prints",
        "creates models",
        "designs devices"
      ]
    }
  }

  ngOnInit(): void {
    let taglineIndex = 1;  // Start at 1 since it's already set to the default tagline
    this._taglineCycleInterval = setInterval(() => {
      this.actionNoun = this.actionNouns[nounIndex];
      nounIndex = (nounIndex + 1) % this.actionNouns.length;
    }, this.NOUN_CYCLE_TIME_MS);
  }

  // Properties

  get actionNoun(): string {
    return this._actionNoun;
  }

  set actionNoun(value: string) {
    if (this.actionNouns.includes(value)) {
      this._actionNoun = value;
    }
  }

  // Methods

  getTagline(index: number): string {
    const keys = Object.keys(this._taglineMap);
    if (index % keys.length + 1 === 0) {
      return this.DEFAULT_TAGLINE;
    }

    const linkFlavor = keys[index % keys.length];
    const taglineIndex = Math.floor(index / keys.length);

    return this._taglineMap[linkFlavor][taglineIndex];

    count %= this._taglineMap[flavor].length + 1;

    if (count === 0) {
      return this.DEFAULT_TAGLINE;
    }

    return this._taglineMap[flavor][count];
  }

  resetTagline() {
    this.actionNoun = this.DEFAULT_NOUN;
  }

  stopActionNounCycling() {
    clearInterval(this._taglineCycleInterval);
  }
}
