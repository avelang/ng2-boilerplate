import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, provide } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Router, Routes } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import {About} from './src/views/about';
import {Default} from './src/views/default';

// console.log(About);

@Component({
  selector: 'app',
  template: `
    <a [routerLink]="['/']">Home</a>
	  <a [routerLink]="['/about']">About</a>
    <div class="outer-outlet">
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  {path:'/', component: Default},
  {path:'/about', component: About}
])

export class App {
  constructor(router: Router) {

  }
}

bootstrap(App, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass : PathLocationStrategy })
]);
