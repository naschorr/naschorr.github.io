import { Injectable } from "@angular/core";
import { USE_HASH_ROUTING } from '../../../app/app.config';

@Injectable({
  providedIn: 'root'
})
export class FragmentScrollerService {

  private _useHashRouting: boolean;

  // Lifecycle

  constructor() {
    this._useHashRouting = USE_HASH_ROUTING;
  }

  // Methods

  public scrollToFragment(): boolean {
    /*
      Angular's anchor scrolling doesn't seem to work if content hasn't been loaded, which means lazyloaded content
      generally won't be scrolled to. This workaround just checks for a hash in the URI and if so, since the content
      should already be loaded by now, scrolls to it if it exists. As a bonus it also works with hash routing!
    */
    const hashes = window.location.hash.split("#");
    if (hashes.length <= (this._useHashRouting ? 2 : 1)) {
      // No hash to navigate to, so we're done!
      return true;
    }

    // If the fragment does exist, it'll be at the end.
    const fragment = hashes.pop();
    if (!!fragment) {
      const scroll_target = document.querySelector(`#${fragment}`);

      if (scroll_target) {
        scroll_target.scrollIntoView({ behavior: "smooth", block: "center" });
        return true;
      }
    }

    return false;
  }
}
