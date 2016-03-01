import { Component, Inject } from 'angular2/core';
import { IStateService } from 'angular-ui-router';
import { Pin, pinsService } from 'PinerestApp_ng1';
import { AnalyticsService } from '../_components/analytics-service'



@Component({
  selector: 'upload-component',
  templateUrl:'client/app/upload-component/upload-component.html'
})
export class UploadComponent {
  pinsService:pinsService;
  uiState:IStateService;
  analyticsService:AnalyticsService;
  showSavingLoader:boolean = false;
  newPin:Pin;

  constructor(@Inject('pinsService') _pinsService: pinsService,
              @Inject('$state')  _uiState: IStateService,
              _analyticsService: AnalyticsService) {
    this.pinsService = _pinsService;
    this.uiState = _uiState;
    this.analyticsService = _analyticsService;
    this.newPin = _resetForNewPin();


  }
  submitPin():void {
    this.showSavingLoader = true;
    setTimeout(() => {
      this.pinsService.addPin(this.newPin).then(() => {
        this.newPin = _resetForNewPin();
        this.showSavingLoader = false;
        this.uiState.go('app.home');
        this.analyticsService.recordEvent('submitPin');
      });
    }, 1000)
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