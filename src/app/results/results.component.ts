import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { WineapiService } from '../shared/wineapi.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private wineapi: WineapiService) { }

  public wineList: any;


  ngOnInit() {
    this.route.params.subscribe(params =>
      this.wineapi.getWine(params['search'], params['ip'])
        .subscribe((winelist => this.wineList = winelist.json())));
  }
  public testWine() {
    console.log(this.wineList);
  }

}
