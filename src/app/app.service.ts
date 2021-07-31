import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private sub = new BehaviorSubject<Boolean>(false);
  constructor() { }

  sendData(data: Boolean): void {
    this.sub.next(data);
  }

  getMsg(): Observable<Boolean> {
    return this.sub.asObservable();
  }

}
