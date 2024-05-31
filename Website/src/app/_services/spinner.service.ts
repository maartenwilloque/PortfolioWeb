
import { EventEmitter, Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  loadingChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private ngZone: NgZone) {}

  show() {
    this.ngZone.run(() => {
      this.loadingChange.emit(true);
    });
  }

  hide() {
    this.ngZone.run(() => {
      this.loadingChange.emit(false);
    });
  }
}
