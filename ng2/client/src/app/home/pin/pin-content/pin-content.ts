import { Component, Input } from 'angular2/core';
import { Pin } from '../../../_models/pin';




@Component({
  selector:'pin-content',
  templateUrl:'client/app/home/pin/pin-content/pin-content.html'
})
export class PinContent {
  @Input() pin:Pin;
}


