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
  public p: number = 1;

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.wineapi.getWine(params['search'])
        .subscribe((winelist => this.wineList = winelist.json())));
  }
  public fetchSuggestion(suggestion) {
    this.wineapi.getWine(suggestion)
      .subscribe((winelist => this.wineList = winelist.json()))
  }
  public getWine(wineID) {
    this.router.navigate(['/wine', wineID]);
  }

}
