import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';

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
  }

  ngOnInit() {
  }


}
