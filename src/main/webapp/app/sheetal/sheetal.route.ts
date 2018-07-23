import { Routes } from '@angular/router';

import {
  mainRoute,
  contactRoute,
  meetRoute,
  taxRoute
  } from '.';

const SHEETAL_ROUTE = [
  mainRoute,
  contactRoute,
  meetRoute,
  taxRoute

];
export const sheetalState: Routes = [{
    path: '',
    children: SHEETAL_ROUTE
}];
// import { Route } from '@angular/router';
// import { UserRouteAccessService } from '../shared';
// import { SheetalComponent } from './';
// export const SHEETAL_ROUTE: Route = {
//   path: 'sheetal',
//   component: SheetalComponent,
//   data: {
//     authorities: [],
//     pageTitle: 'sheetal.title'
//   },
//   canActivate: [UserRouteAccessService]
// };
