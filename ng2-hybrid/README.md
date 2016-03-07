## Photo Gallery - hybrid 

Highlights:

1. Concat angular 1 into one app-ng1 component and bootstrap it into app-ng2 using SystemJS.
  
2. In order to reuse angular1 services and modules in angular2, we need to manually create a TypeScript definition file and define the components we created (app-ng1.d.ts).
  
3. We want to use angular-ui-router from angular 1, so need to install angular-ui-router's TypeScript definition file. This can be achieved by running tsd install. Once it is installed, a tsd.json file will be created/updated.
  
4. For experimental purpose, we rewrite 2 components and 1 service in angular2. Those components need to be downgraded so they can be reused in both angular 1 and 2 modules.

5. Also upgrade 2 services from angular1 ($state and $q), so they can be used for both angular1 and angular2 moduels.

6. Adjust angular-ui-router so it can mix both angular1 and angular2 routes.
  
7. Bootstrap all upgraded/downgraded components into one final modules call 'PinerestApp' (see app-ng2.ts). 



## Getting Started

1. Install tsd globally using npm
2. Run "gulp serve" or "gulp build"
3. To see app run go to: http://localhost:3032