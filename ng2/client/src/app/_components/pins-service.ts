import { Component, Injectable, EventEmitter } from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Pin } from '../_models/pin';
import { AppSingletonService } from './app-singletone-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  providers: [HTTP_PROVIDERS]
})
export class PinsService {
  appInst = AppSingletonService.getInstance();
  http:Http;
  allPinsObservable: Observable<Pin[]>;
  allPinsObserver: any;

  constructor(_http: Http) {
    this.http = _http;
  }

  public getPins() {
    if(this.appInst.getAllPins() === undefined) {
      return this.http
        .get('/assets/data/sample-data.json')
        .map(res => {
          var allPins = res.json();
          this.appInst.setAllPins(allPins);
          return allPins;
        });
    }else{
      return this.allPinsObservable = new Observable.create(observer => {
        this.allPinsObserver = observer.next( this.appInst.getAllPins() );
      });
    }
  }

  public addPin(newPin:Pin) {
    var allPins = this.appInst.getAllPins();
    allPins.unshift(newPin);

    this.appInst.setAllPins(allPins);
    return this.allPinsObservable = new Observable.create(observer => {
      return observer.next(allPins);
    });
  }


}


