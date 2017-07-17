import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public route: string;

  constructor(private location: Location, private router: Router) {
    router.events.subscribe((val) => {
      this.route = location.path();
    });
  }

  public hideSearch: boolean = true;
  public searchTerm: string;

  showSearch() {
    this.hideSearch = (this.hideSearch == true ? false : true);
  }

  wineSearch() {
    this.showSearch();
    this.router.navigate(['/results', this.searchTerm]);
  }

  ngOnInit() {
  }

}
