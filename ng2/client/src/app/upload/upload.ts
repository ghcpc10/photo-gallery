import { Component, Inject } from 'angular2/core';
import { Router } from 'angular2/router';
import { Pin } from '../_models/pin';
import { PinsService } from '../_components/pins-service';
import { AnalyticsService } from '../_components/analytics-service';



@Component({
  selector: 'upload-component',
  templateUrl:'client/app/upload/upload.html',
  providers: [PinsService, AnalyticsService]
})
export class UploadComponent {
  router:Router
  pinsService:PinsService;
  analyticsService:AnalyticsService;
  showSavingLoader:boolean = false;
  pins:Pin[] =[];
  newPin:Pin;


  constructor(_router:Router, _pinsService: PinsService, _analyticsService: AnalyticsService) {
    this.router = _router;
    this.pinsService = _pinsService;
    this.analyticsService = _analyticsService;

    this.pinsService.getPins().subscribe(pins => {
      console.log('upload==> getPins ', pins);
      this.pins = pins;
    });

    this.newPin = _resetForNewPin();
  }


  submitPin():void {
    this.showSavingLoader = true;
    setTimeout(() => {
      this.pinsService.addPin(this.newPin).subscribe(pins => {
        this.showSavingLoader = false;
        this.router.navigate( ['/Home'] );
        this.analyticsService.recordEvent('submitPin');
      });
    }, 1000);
  }
}




function _resetForNewPin():Pin {
  return {
    id: Math.floor(Math.random() * 5000).toString(),
    user_name: "matt1234",
    user_avatar: "assets/images/avatars/avatar06.jpg",
    img_title: "New Uploaded Cat",
    img_src: "assets/images/products/sample_07.jpg",
    liked: false
  }
}