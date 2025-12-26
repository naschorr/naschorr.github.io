import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';
import { map, startWith, distinctUntilChanged } from 'rxjs/operators';

// Breakpoints in sync with: src\styles\_variables.scss
// TODO: Update Tailwind to v4 and read breakpoints from the computed stylesheet
enum Breakpoint {
  SM = 640,
  MD = 768,
  LG = 1024,
  XL = 1280,
  XXL = 1536
}

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  private _currentBreakpoint$ = new BehaviorSubject<number>(window.innerWidth);
  public currentBreakpoint$: Observable<number> = this._currentBreakpoint$.asObservable();

  constructor() {
    fromEvent(window, 'resize')
      .pipe(
        map(() => window.innerWidth),
        startWith(window.innerWidth),
        distinctUntilChanged()
      )
      .subscribe(width => this._currentBreakpoint$.next(width));
  }

  isSm(): boolean {
    return window.innerWidth >= Breakpoint.SM && window.innerWidth < Breakpoint.MD;
  }

  isMd(): boolean {
    return window.innerWidth >= Breakpoint.MD && window.innerWidth < Breakpoint.LG;
  }

  isLg(): boolean {
    return window.innerWidth >= Breakpoint.LG && window.innerWidth < Breakpoint.XL;
  }

  isXl(): boolean {
    return window.innerWidth >= Breakpoint.XL && window.innerWidth < Breakpoint.XXL;
  }

  isXxl(): boolean {
    return window.innerWidth >= Breakpoint.XXL;
  }

  isLessThan(breakpoint: Breakpoint): boolean {
    return window.innerWidth < breakpoint;
  }

  isGreaterThanOrEqualTo(breakpoint: Breakpoint): boolean {
    return window.innerWidth >= breakpoint;
  }
}
