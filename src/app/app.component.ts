import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: '<h1>{{title}}</h1>' +
  '<nav><a routerLink="/dashboard">Dashboard</a></nav>' +
  '<nav><a routerLink="/heroes">Heroes</a></nav>' +
  '<nav><a routerLink="/market">Market</a></nav>' +
  '<nav><a routerLink="/position">Position</a></nav>' +
  '<nav><a routerLink="/history">History</a></nav>' +
  '<nav><a routerLink="/demo">Demo</a></nav>' +
  '<nav><a routerLink="/about">About</a></nav>' +
  '<router-outlet></router-outlet>'
})

export class AppComponent {
  title = 'Forex workbench';
}
