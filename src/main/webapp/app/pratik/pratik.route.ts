import { Routes } from '@angular/router';

import {
howRoute,
SpendRoute
} from './';

const PRATIK_ROUTES = [
    howRoute,
    SpendRoute
];
export const pratikState: Routes = [{
    path: '',
    children: PRATIK_ROUTES
}];
