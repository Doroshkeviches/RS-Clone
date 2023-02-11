import { headerTemplate } from '../Pages/header/header.template';
import { addFunctionalToPage } from '../Pages/index';
import { router } from './router';
import { config, routes, routesObj } from './Routes.interface';

export class Module {
  routes: routes;
  constructor(config: config) {
    this.routes = config.routes;
  }
  start() {
    if (this.routes) this.initRoutes();
  }

  initRoutes() {
    window.addEventListener('hashchange', this.renderRout.bind(this));
    window.addEventListener('load', this.renderRout.bind(this));
  }

  renderRout() {
    const url: string = router.getUrl();
    const route: routesObj = this.routes.find(
      (r) => r.path === url
    ) as routesObj;

    if (route !== undefined) {
      (document.querySelector('body') as HTMLElement).innerHTML = `
       ${headerTemplate}
       <main>
        ${route.component}
       </main>`;
    } else {
      window.location.hash = '404';
    }

    addFunctionalToPage(url);
  }
}
