import { routesObj } from './Routes.interface';
import { autorizationTemplate } from '../Pages/registrationPage/registration.template';
import { NotFoundTemplate } from '../Pages/404/errorTemplate';
import { exerciseTemplate } from '../Pages/exercise/exerciseTemplate';
import { nutritionCalculator } from '../Pages/nutrityionix_CalculatorPage/scripts/nutritionContainer.template';
import { WorkoutTemplate } from '../Pages/Workout/components/Workout.templates';
import { goalPageTemplate } from '../Pages/goalsPage/scripts/goalPage.template';
import { profileTemplate } from '../Pages/profilePage/scripts/profilePage.template';
import { singleWorkoutTemplate } from '../Pages/singleWorkotPage/components/single.Workout.template';

//TODO add all pages path and component
export const appRoutes: routesObj[] = [
  { path: 'autorization', component: autorizationTemplate },
  { path: 'Workout', component: WorkoutTemplate },
  {
    path: 'Exercises',
    component: WorkoutTemplate,
  },
  { path: '404', component: NotFoundTemplate },
  {
    path: 'Workout/',
    component: singleWorkoutTemplate,
  },
  {
    path: 'Exercises/',
    component: exerciseTemplate,
  },
  { path: 'Exercises', component: WorkoutTemplate },
  { path: 'Calculator', component: nutritionCalculator.template },
  { path: 'Goals', component: goalPageTemplate },
  { path: 'Profile', component: profileTemplate },
  { path: '', component: autorizationTemplate },
];
