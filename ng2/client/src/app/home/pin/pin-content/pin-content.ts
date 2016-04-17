import { Component, Input } from 'angular2/core';
import { Pin } from '../../../_models/pin';
import { PinTruncatePipe } from '../pin-pipe';




@Component({
  selector:'pin-content',
  pipes: [PinTruncatePipe],
  templateUrl:'client/app/home/pin/pin-content/pin-content.html'
})
export class PinContent {
  @Input() pin:Pin;
}


