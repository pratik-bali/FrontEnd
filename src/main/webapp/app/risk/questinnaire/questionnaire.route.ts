import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../shared';

import { QuestionnaireComponent } from './questionnaire.component';

export const questionnaireRoute: Route = {
    path: 'questionnaire',
    component:  QuestionnaireComponent,
    data: {
        authorities: [],
        pageTitle: 'questionnaire'
    }
};
