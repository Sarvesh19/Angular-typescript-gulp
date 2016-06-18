import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router';

import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';


@Component({
    selector:'my-app',
    template:`
            <h1>{{title}}</h1>
            <a [routerLink]="['Heroes']">Heroes</a>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <router-outlet></router-outlet>
            `,
    directives:[ROUTER_DIRECTIVES],
    providers:[
        ROUTER_PROVIDERS,
        HeroService
    ]
})
@RouteConfig([
    {
        path:'/heroes',
        name:'Heroes',
        component: HeroesComponent,
    useAsDefault: true
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        
    }
])
export class AppComponent {
    title= 'Tour of Heroes';
}