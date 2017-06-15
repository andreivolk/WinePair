import { Injectable } from '@angular/core';
import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http';

@Injectable()
export class IplookupService {

  constructor(private jsonp: Jsonp) { }

  public getIp() {
    return this.jsonp.get('//api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK').map(response => this.toInt(response["_body"]["ip"]));
  }

  //Convert ip to integer for lookup
  toInt(ip) {
    var ipl = 0;
    ip.split('.').forEach(function (octet) {
      ipl <<= 8;
      ipl += parseInt(octet);
    });
    return (ipl >>> 0);
  };

}
