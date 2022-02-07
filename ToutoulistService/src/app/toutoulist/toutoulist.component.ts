import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ToutouService } from '../toutou.service';

@Component({
  selector: 'app-toutoulist',
  templateUrl: './toutoulist.component.html',
  styleUrls: ['./toutoulist.component.scss'],
})
export class ToutoulistComponent implements OnInit {

  @Input() toutouId: number;
  toutouName: string;
  toutouTask: string;

  constructor(private toutouService: ToutouService) { 
  }

  ngOnInit(): void {
    this.user = "Remi Falcati";
  }

  deleteToutou(): void {
    this.toutouService.deleteToutou(this.toutouId);
  }

}
