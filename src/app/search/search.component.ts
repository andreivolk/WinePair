import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
// import { IplookupService } from './iplookup.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  public searchTerm: string;

  wineSearch() {
    this.router.navigate(['/results', this.searchTerm]);
    // this.wineApi.getWine(this.searchTerm, this.ipInteger).subscribe(res => console.log(res.json()));
  }

  ngOnInit() {
    // this.ipLookup.getIp()
    //   .subscribe(ipInt => this.ipInteger = ipInt);
  }


}
