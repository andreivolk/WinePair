import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { WineapiService } from '../shared/wineapi.service';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {

  rating: string = "3";
  wineDetail: any;

  constructor(private route: ActivatedRoute, private router: Router, private wineapi: WineapiService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.wineapi.getWineByID(+params['id'])
        .subscribe((wineDetail => this.wineDetail = wineDetail.json())));
  }
  public testWine() {
    console.log(this.wineDetail);
  }

}
