export interface config {
  routes: routes;
}

export interface routes {
  find(arg0: (r: routesObj) => boolean): routesObj;
  [index: number]: routesObj;
}

export interface routesObj {
  component: component;
  path: string;
}

export interface component {
  selector?: string;
  template: string;
}
