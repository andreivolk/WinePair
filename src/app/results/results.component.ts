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

  rating: string = "4";

  public wineList = {
    Id: 147844,
    Name: "Dog Point Vineyard Section 94 Sauvignon Blanc 2013",
    Url: "http://www.wine.com/v6/Dog-Point-Vineyard-Section-94-Sauvignon-Blanc-2013/wine/147844/Detail.aspx",
    Appellation: {
      "Id": 10071,
      "Name": "Marlborough",
      "Url": "http://www.wine.com/v6/Marlborough/wine/list.aspx?N=7155+114+10071",
      "Region": {
        "Id": 114,
        "Name": "New Zealand",
        "Url": "http://www.wine.com/v6/New-Zealand/wine/list.aspx?N=7155+114",
        "Area": null
      }
    },
    Labels: [
      {
        "Id": "147844m",
        "Name": "thumbnail",
        "Url": "http://cache.wine.com/labels/147844m.jpg"
      }
    ],
    Type: "Wine",
    Varietal: {
      "Id": 151,
      "Name": "Sauvignon Blanc",
      "Url": "http://www.wine.com/v6/Sauvignon-Blanc/wine/list.aspx?N=7155+125+151",
      "WineType": {
        "Id": 125,
        "Name": "White Wines",
        "Url": "http://www.wine.com/v6/White-Wines/wine/list.aspx?N=7155+125"
      }
    },
    Vineyard: {
      "Id": 6435,
      "Name": "Dog Point  Vineyard",
      "Url": "http://www.wine.com/v6/Dog-Point-Vineyard/learnabout.aspx?winery=17583",
      "ImageUrl": "http://cache.wine.com/aboutwine/basics/images/winerypics/17583.jpg",
      "GeoLocation": {
        "Latitude": -360,
        "Longitude": -360,
        "Url": "http://www.wine.com/v6/aboutwine/mapof.aspx?winery=17583"
      }
    },
    Vintage: "2013",
    Community: {
      "Reviews": {
        "HighestScore": 10,
        "List": [],
        "Url": "http://www.wine.com/v6/Dog-Point-Vineyard-Section-94-Sauvignon-Blanc-2013/wine/147844/Detail.aspx?pageType=reviews"
      },
      "Url": "http://www.wine.com/v6/Dog-Point-Vineyard-Section-94-Sauvignon-Blanc-2013/wine/147844/Detail.aspx"
    },
    Description: "",
    GeoLocation: {
      "Latitude": -360,
      "Longitude": -360,
      "Url": "http://www.wine.com/v6/aboutwine/mapof.aspx?winery=17583"
    },
    PriceMax: 34.99,
    PriceMin: 31.99,
    PriceRetail: 35,
    ProductAttributes: [
      {
        "Id": 44,
        "Name": "Screw Cap Wines",
        "Url": "http://www.wine.com/v6/Screw-Cap-Wines/wine/list.aspx?N=7155+44",
        "ImageUrl": "http://cache.wine.com/assets/glo_icon_screwcap_big.gif"
      },
      {
        "Id": 0,
        "Name": "Has Large Label",
        "Url": "",
        "ImageUrl": ""
      },
      {
        "Id": 614,
        "Name": "Light &amp; Crisp",
        "Url": "http://www.wine.com/v6/Light-andamp-Crisp/wine/list.aspx?N=7155+614",
        "ImageUrl": ""
      }
    ],
    Ratings: {
      "HighestScore": 96,
      "List": []
    },
    Retail: null,
    Vintages: {
      "List": []
    }
  };



  ngOnInit() {
    // this.route.params.subscribe( params =>
    // this.wineapi.getWine(+params['search'],params['ip'])
    // .subscribe((winelist => this.wineList = winelist)));
    this.route.params.subscribe(params =>
      this.wineapi.getWine(params['search'], params['ip'])
        .subscribe((winelist => console.log(winelist.json()))));
  }

}
