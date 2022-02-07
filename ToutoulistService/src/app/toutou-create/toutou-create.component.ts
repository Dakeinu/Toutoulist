import { Component, OnInit } from '@angular/core';
import { ToutouService } from '../toutou.service';

@Component({
  selector: 'app-toutou-create',
  templateUrl: './toutou-create.component.html',
  styleUrls: ['./toutou-create.component.scss']
})
export class ToutouCreateComponent implements OnInit {

  constructor(private toutouService: ToutouService) { }

  ngOnInit(): void {
  }

  addToutou(): void {
    this.toutouService.addToutou();
  }

}
