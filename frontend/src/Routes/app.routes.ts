import { routesObj } from './Routes.interface';
import { autorizationTemplate } from '../Pages/registrationPage/registration.template';
import { NotFoundTemplate } from '../Pages/404/errorTemplate';
import { WorkoutTemplate } from '../Pages/Workout/components/Worckout.templates';

//TODO add all pages path and component
export const appRoutes: routesObj[] = [
  { path: 'autorization', component: autorizationTemplate },
  { path: 'Workout', component: WorkoutTemplate },
  { path: 'Exercises', component: WorkoutTemplate },
  { path: '404', component: NotFoundTemplate },
  {
    path: 'Workout/',
    component: 'singleWorkoutTemplate' /*Switch to SingleWorkoutTemplate */,
  },
  {
    path: 'Exercises/',
    component: 'singleExercisesTemplate' /*Switch to SingleExercisesTemplate */,
  },
  { path: '', component: autorizationTemplate },
];
