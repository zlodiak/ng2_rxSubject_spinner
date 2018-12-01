import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  update: BehaviorSubject<boolean> = new BehaviorSubject(false);

  show() {
    this.update.next(true);
  }

  hide() {
    this.update.next(false);
  }

}
