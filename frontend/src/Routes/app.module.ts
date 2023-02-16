import { Module } from './module';
import { appRoutes } from './app.routes';
import { routes } from './Routes.interface';

export const appModule = new Module({
  routes: appRoutes as routes,
});

appModule.start();
