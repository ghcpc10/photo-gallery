import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { PinComponent } from './pin/pin-component';
import { Pin } from '../_models/pin';
import { PinsService } from '../_components/pins-service';


@Component({
  selector:'home-component',
  templateUrl:'client/app/home/home.html',
  providers: [PinsService],
  directives: [PinComponent]
})
export class HomeComponent {
  pinsService:PinsService;
  pins:Pin[] =[];

  constructor(_pinsService: PinsService) {
    this.pinsService = _pinsService;

    this.pinsService.getPins().subscribe(pins => {
      console.log('home => getPins', pins);
      this.pins = pins;
    });
  }

}

