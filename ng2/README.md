## Photo Gallery - ng2 

Highlights:

1. Bootstrapping Angular2's routerLink as the router.  
  
2. Use SystemJS for loading angular2 moduels.  
  
3. Replace $q from angular1 by implementing RxJS Observables as asynchronous primitives.  
  
4. Unlike Angular 1, angular 2's service is not singletone. Create an app-singletone-service to store all shared data in between different components. (Note:  Angular 2 has been changed a lot, when this demo is created, singletone service is not available in angular2 and I have to create myself for this demo (see app-single-service.ts in service folder). But it might be changed in later version).  
  
5. Angular 2 is still in its beta version and lots of npm modules are not compatible. So some modules are set to specific version in package,json. This should be updated carefully once the new versions are available.   



## Getting Started

1. gulp serve
2. gulp build