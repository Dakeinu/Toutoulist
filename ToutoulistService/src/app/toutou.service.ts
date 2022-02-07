import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IToutou } from './itoutou';

@Injectable({
  providedIn: 'root'
})
export class ToutouService {

  public toutous: IToutou[] = [
    {
      id: 1,
      toutou: "Gipsy",
      task: ""
    },
    {
      id: 2,
      toutou: "Nella",
      task: ""
    },
    {
      id: 3,
      toutou: "Moustache",
      task: ""
    }
  ];

  public toutous$: BehaviorSubject<ToutouService[]>

  constructor() {
    this.toutous$ = new BehaviorSubject<IToutou[]>{this.toutous};
  }

  addToutou(): void {
    const id = this.toutous.length === 0 ? 1 :
    Math.max.apply(Math, this.toutous.map((toutou) => {
      return toutou.id;
    })) + 1;

    this.toutous.push({ id });
    this.toutous$.next({this.toutous});
  }

  deleteToutou(toutouId: number): void {
    const index = this.toutous.findIndex((x) => x.id === toutouId);
    if ( index > -1 ){
      this.toutous.splice(index, 1);
      this.toutous$.next(this.toutous);
    }
  }
}
