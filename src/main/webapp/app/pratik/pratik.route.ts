import { Routes } from '@angular/router';

import { howRoute, SpendRoute, subRoute} from '.';

const PRATIK_ROUTES = [
    howRoute, SpendRoute, subRoute
];

export const pratikState: Routes = [{
    path: '',
    children: PRATIK_ROUTES
}];
