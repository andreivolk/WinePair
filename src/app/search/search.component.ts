import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { WineapiService } from './wineapi.service';
import { IplookupService } from './iplookup.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private wineApi: WineapiService, private ipLookup: IplookupService) { }

  public searchTerm: string;
  public ipInteger: number;

  wineSearch() {
    // this.router.navigate(['/results', this.searchTerm]);
    this.wineApi.getWine(this.searchTerm, this.ipInteger).subscribe(res => console.log(res.json().Products.List));
  }

  ngOnInit() {
    this.ipLookup.getIp()
      .subscribe(ipInt => this.ipInteger = ipInt);
  }


}
