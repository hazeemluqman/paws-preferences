import { Injectable } from '@angular/core';
import { HammerModule, HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override buildHammer(element: HTMLElement) {
    return new Hammer(element, {
      touchAction: 'pan-y',
      recognizers: [
        [Hammer.Swipe, { direction: Hammer.DIRECTION_ALL }],
        [Hammer.Pan, { direction: Hammer.DIRECTION_ALL }]
      ]
    });
  }
}
