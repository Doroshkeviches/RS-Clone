import { routesObj } from './Routes.interface';
import { autorizationTemplate } from '../Pages/registrationPage/registration.template';
import { NotFoundTemplate } from '../Pages/404/errorTemplate';
import { singleWorkoutTemplate } from '../Pages/singleWorkotPage/components/single.Workout.template';

//TODO add all pages path and component
export const appRoutes: routesObj[] = [
  { path: 'autorization', component: autorizationTemplate },
  { path: '404', component: NotFoundTemplate },
  { path: 'Workout/', component: singleWorkoutTemplate },
  { path: '', component: autorizationTemplate },
];
