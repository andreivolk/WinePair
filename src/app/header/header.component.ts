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

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      this.route = location.path();
    });
  }

  public hideSearch: boolean = true;

  showSearch() {
    this.hideSearch = (this.hideSearch == true ? false : true);
  }

  ngOnInit() {
  }

}
