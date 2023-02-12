export interface config {
  routes: routes;
}

export interface routes {
  find(arg0: (r: routesObj) => boolean): routesObj;
  [index: number]: routesObj;
}

export interface routesObj {
  component: string;
  path: string;
}

export interface Module {
  start: () => void
}
