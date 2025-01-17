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
  private readonly TAGLINE_FLAVOR_COUNT!: number;
  private readonly TAGLINE_MAX_COUNT!: number;
  private readonly DEFAULT_TAGLINE = "makes stuff";
  private readonly TAGLINE_CYCLE_TIME_MS = 2000;
  private _taglineMap!: { [key in string]: string[] };
  private _taglineCycleInterval!: ReturnType<typeof setInterval>;
  private _tagline: string = this.DEFAULT_TAGLINE;
  private _activeLinkFlavor: LinkFlavor | null = null;
  private _activeLinkMouseoverActive: boolean = false;

  // Lifecycle

  constructor() {
    // Configure the tagline map
    this._taglineMap = {
      [LinkFlavor.CODE]: [
        "writes code",
        "designs tools",
        "reads the docs"
      ],
      [LinkFlavor.PORTFOLIO]: [
        "develops projects",
        "solves problems",
        "builds solutions"
      ],
      [LinkFlavor.PRINT]: [
        "designs solutions",
        "makes models",
        "prints prototypes"
      ]
    }

    // Get the total number of tagline flavors
    this.TAGLINE_FLAVOR_COUNT = Object.keys(this._taglineMap).length;

    // Get the total number of taglines avaiable
    let taglineMaxCount = 0;
    Object.values(this._taglineMap).forEach((strings) => {
      taglineMaxCount += strings.length;
    });
    this.TAGLINE_MAX_COUNT = taglineMaxCount;
  }

  ngOnInit(): void {
    let taglineIndex = 0;  // Show the default tagline first
    let defaultTaglineShown = true;
    this._taglineCycleInterval = setInterval(() => {
      // After a cycle of one tagline from each flavor, reset to the default tagline
      if (taglineIndex % this.TAGLINE_FLAVOR_COUNT === 0 && !defaultTaglineShown) {
        this.tagline = this.DEFAULT_TAGLINE;
        this.activeLinkFlavor = null;

        defaultTaglineShown = true;
        return;
      }

      // Reset the default tagline flag
      if (defaultTaglineShown) {
        defaultTaglineShown = false
      }

      // Get and then set the tagline from the map
      const linkFlavor = Object.keys(this._taglineMap)[taglineIndex % this.TAGLINE_FLAVOR_COUNT];
      const index = Math.floor(taglineIndex / this.TAGLINE_FLAVOR_COUNT);
      this.tagline = this._taglineMap[linkFlavor][index];
      this.activeLinkFlavor = linkFlavor as LinkFlavor;

      // Increment the index for future lookups
      taglineIndex = (taglineIndex + 1) % this.taglineMaxCount;
    }, this.TAGLINE_CYCLE_TIME_MS);
  }

  // Get/Set

  get linkFlavorEnum() {
    return LinkFlavor;
  }

  get taglineMaxCount(): number {
    return this.TAGLINE_MAX_COUNT;
  }

  get tagline(): string {
    return this._tagline;
  }

  set tagline(tagline: string) {
    this._tagline = tagline;
  }

  get taglines(): string[] {
    const taglines = [];

    taglines.push(this.DEFAULT_TAGLINE);
    for (let i = 0; i < this.TAGLINE_MAX_COUNT; i++) {
      taglines.push(this.getTagline(i));
    }

    return taglines;
  }

  get activeLinkFlavor(): LinkFlavor | null {
    return this._activeLinkFlavor;
  }

  set activeLinkFlavor(linkFlavor: LinkFlavor | null) {
    this._activeLinkFlavor = linkFlavor;
  }

  // Methods

  getTagline(index: number): string {
    const linkFlavor = Object.keys(this._taglineMap)[index % this.TAGLINE_FLAVOR_COUNT];
    const taglineIndex = Math.floor(index / this.TAGLINE_FLAVOR_COUNT);

    return this._taglineMap[linkFlavor][taglineIndex];
  }

  getRandomTagline(linkFlavor: LinkFlavor): string {
    const taglines = this._taglineMap[linkFlavor];
    const randomIndex = Math.floor(Math.random() * taglines.length);

    return taglines[randomIndex];
  }

  onLinkMouseOver(linkFlavor: LinkFlavor) {
    if (!this._activeLinkMouseoverActive) {
      this.tagline = this.getRandomTagline(linkFlavor);
      this.activeLinkFlavor = linkFlavor;
      clearInterval(this._taglineCycleInterval);

      this._activeLinkMouseoverActive = true;
    }
  }

  onLinkMouseExit() {
    if (this._activeLinkMouseoverActive) {
      this.tagline = this.DEFAULT_TAGLINE;
      this.activeLinkFlavor = null;

      this._activeLinkMouseoverActive = false;
    }
  }
}
