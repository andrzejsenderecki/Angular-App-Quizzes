import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavSublistService {
  private _sublistIndex = new Subject<number>();

  constructor() { }

  setSublistIndex(index: number) {
    this._sublistIndex.next(index);
  }

  getSublistIndex(): Observable<number> {
    return this._sublistIndex.asObservable();
  }
}
