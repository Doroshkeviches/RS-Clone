import { routesObj } from './Routes.interface';
import { autorizationTemplate } from '../Pages/registrationPage/registration.template';
import { NotFoundTemplate } from '../Pages/404/errorTemplate';
import { nutritionCalculator } from '../Pages/nutrityionix_CalculatorPage/scripts/nutritionContainer.template';
//TODO add all pages path and component
export const appRoutes: routesObj[] = [
  { path: '', component: autorizationTemplate },
  { path: 'autorization', component: autorizationTemplate },
  { path: '404', component: NotFoundTemplate },
  { path: 'Calculator', component: nutritionCalculator.template },
];
