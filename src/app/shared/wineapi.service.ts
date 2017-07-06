import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
// import { Observable } from 'rxjs';
// import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class WineapiService {

  constructor(private http: Http) { }

  public getWine(searchTerm) {
    return this.http.get(environment.wineapi + 'search/search=' + searchTerm);
  }
  public getWineByID(wineID) {
    return this.http.get(environment.wineapi + 'search/wineID=' + wineID);
  }

}
