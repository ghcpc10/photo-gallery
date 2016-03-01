import { Component } from 'angular2/core';
import { Pin } from '../../_models/pin'
import { AnalyticsService } from '../../_components/analytics-service';
import { PinContent } from './pin-content/pin-content';
import { PinOverlay } from './pin-overlay/pin-overlay';


@Component({
  selector: 'pin-component',
  templateUrl:'client/app/home/pin/pin-component.html',
  inputs:['pin'],
  providers: [AnalyticsService],
  directives: [PinContent, PinOverlay]
})
export class PinComponent {
  analyticsService:AnalyticsService;

  constructor(_analyticsService: AnalyticsService) {
    this.analyticsService = _analyticsService;
  }


  isLiked(likedOrNot:boolean):void {
    this.analyticsService.recordEvent('isLiked: : '+likedOrNot);
  }

}
