import { Injectable } from "@angular/core";
import { Location } from "@angular/common";
import { USE_HASH_ROUTING } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class FragmentManagerService {

  private _useHashRouting: boolean;

  // Lifecycle

  constructor(private _location: Location) {
    this._useHashRouting = USE_HASH_ROUTING;
  }

  // Methods

  public getFragment(): string | null {
    let fragment = null;

    // Find the fragment
    if (this._useHashRouting) {
      const path = location.pathname + location.hash;

      let hashes = path.split("#");
      hashes = hashes.slice(1);
      fragment = hashes.pop();
    } else {
      fragment = location.hash.slice(1);
    }

    // No/falsy fragment?
    if (!fragment) {
      return null;
    }

    return fragment;
  }

  public setFragment(fragment: string): void {
    // Process the path with the hash included if hash routing is enabled.
    if (this._useHashRouting) {
      const path = location.pathname + location.hash;

      let hashes = path.split("#");
      hashes = hashes.slice(1);
      if (hashes.length > 1) {
        hashes = hashes.slice(0, -1);
      }

      this._location.replaceState(`${hashes.join("#")}#${fragment}`);
      return;
    }

    // Way simpler without hash routing!
    this._location.replaceState(`${location.pathname}#${fragment}`);
  }
}
