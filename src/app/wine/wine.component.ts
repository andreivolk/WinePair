import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {

  rating: string = "5";

  constructor() { }

  ngOnInit() {
  }

}
