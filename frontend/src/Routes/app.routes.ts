import { routesObj } from './Routes.interface';
import { autorizationTemplate } from '../Pages/registrationPage/registration.template';
import { createWorckoutTemplate } from '../Pages/Workout/components/Workout.template';

//TODO add all pages path and component
export const appRoutes: routesObj[] = [
  { path: '', component: autorizationTemplate },
  { path: 'autorization', component: autorizationTemplate },
  { path: 'Workout', component: createWorckoutTemplate('Workout') },
  { path: 'Exercises', component: createWorckoutTemplate('Exercises') },
];
