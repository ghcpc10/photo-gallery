import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {HomeComponent} from './home/home';
import {UploadComponent} from './upload/upload';
import {bootstrap} from 'angular2/platform/browser';






@Component({
  selector: 'pinerest-app',
  //templateUrl: './app.html',
  templateUrl:'client/app/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/home', name:'Home', component: HomeComponent, useAsDefault: true},
  {path:'/upload', name:'Upload', component: UploadComponent},
])
export class PinerestApp {}




bootstrap(PinerestApp, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS
]);