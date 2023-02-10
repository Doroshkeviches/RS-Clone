import { routesObj } from './Routes.interface';
import { NotFoundTemplate } from '../Pages/404/errorTemplate';

//TODO add all pages path and component
export const appRoutes: routesObj[] = [
  { path: '404', component: NotFoundTemplate },
];
