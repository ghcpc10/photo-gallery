import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { Pin } from 'PinerestApp_ng1';


@Component({
  selector:'pin-overlay',
  templateUrl:'client/app/home/pin/pin-overlay/pin-overlay.html',
  //inputs:['pin'],
  //outputs:['onToggleLike']
})
export class PinOverlay {
  @Input() pin:Pin;
  @Output() onToggleLike:EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleLike():void {
    this.pin.liked = !this.pin.liked;
    this.onToggleLike.next(this.pin.liked);
  }
}