import { UpgradeAdapter } from 'angular2/upgrade';
import * as angular from 'angular2/src/upgrade/angular_js';
import 'PinerestApp_ng1';
import { PinOverlay } from './home/pin/pin-overlay/pin-overlay';
import { UploadComponent } from './upload-component/upload-component';
import { AnalyticsService } from './_components/analytics-service';



const upgradeAdapter:UpgradeAdapter = new UpgradeAdapter();







// Expose our ng2 content to ng1
upgradeAdapter.addProvider(AnalyticsService);

angular.module('PinerestApp')
  .directive('pinOverlay', upgradeAdapter.downgradeNg2Component(PinOverlay))
  .directive('uploadComponent', upgradeAdapter.downgradeNg2Component(UploadComponent))
  .factory('analyticsService', upgradeAdapter.downgradeNg2Provider(AnalyticsService));


// Expose our ng1 content to ng2
upgradeAdapter.upgradeNg1Provider('pinsService');
upgradeAdapter.upgradeNg1Provider('$state');


// Bootstrap the App
upgradeAdapter.bootstrap(document.body, ['PinerestApp']);