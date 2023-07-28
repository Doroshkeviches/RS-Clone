import { initPage } from '../Pages/index';
import { createBasePage } from './base.page';
import { router } from './router';
import { config, routes, routesObj } from './Routes.interface';

export class Module {
  routes: routes;
  constructor(config: config) {
    this.routes = config.routes;
  }
  start() {
    createBasePage();
    if (this.routes) this.initRoutes();
  }

  initRoutes() {
    window.addEventListener('hashchange', this.renderPage.bind(this));
    window.addEventListener('load', this.renderPage.bind(this));
  }

  renderPage() {
    const startUrl: string = router.getUrl();
    const route: routesObj = this.routes.find(
      (r) => r.path === startUrl
    ) as routesObj;

    if (route !== undefined) {
      (document.querySelector('.root') as HTMLElement).innerHTML =
        route.component;
    } else {
      window.location.hash = '404';
    }

    initPage(startUrl);
  }
}
