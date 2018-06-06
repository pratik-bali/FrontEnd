import { Routes } from '@angular/router';

import { mutualRoute, upRoute } from './';
const UP_ROUTES = [
   mutualRoute,
   upRoute
];
export const userprofileState: Routes = [{
    path: '',
    children: UP_ROUTES,
}];
