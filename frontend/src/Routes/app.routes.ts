import { routesObj } from './Routes.interface';
import { autorizationTemplate } from '../Pages/registrationPage/registration.template';
import { NotFoundTemplate } from '../Pages/404/errorTemplate';

//TODO add all pages path and component
export const appRoutes: routesObj[] = [
  { path: '', component: autorizationTemplate },
  { path: 'autorization', component: autorizationTemplate },
  { path: '404', component: NotFoundTemplate },
];
