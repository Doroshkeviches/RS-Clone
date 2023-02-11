import { routesObj } from './Routes.interface';
import { autorizationTemplate } from '../Pages/registrationPage/registration.template';

//TODO add all pages path and component
export const appRoutes: routesObj[] = [
  { path: '', component: autorizationTemplate },
  { path: 'autorization', component: autorizationTemplate },
];
