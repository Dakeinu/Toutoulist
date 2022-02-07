import { Component, OnDestroy, OnInit } from '@angular/core';
import { IToutou } from './itoutou';
import { ToutouService } from './toutou.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ToutouService]
})
export class AppComponent implements OnDestroy, OnInit{
  title = 'ToutoulistService';

  toutous: IToutou[];
  toutouSubscription: Subscription;


  constructor(private toutouService: ToutouService) { 
  }

  ngOnInit(): void {
    this.toutouSubscription = this.toutouService.toutous$.subscribe(
      (toutou) => {
        console.log(`New dog : ${toutou}`);
        (toutous: IToutou[]) => {
          this.toutous = toutous;
        }
      },
      (err) => {
        console.log(`Error : ${err}`)
      },
      () => {
        console.log('Complete')
      }
    );
  }

  ngOnDestroy(): void {
    if (this.toutouSubscription) {
      this.toutouSubscription.unsubscribe();
    }
  }
}
