import {Component, Input} from '@angular/core';
import {Hero} from './hero';


@Component({
  selector: 'app-hero-detail',
  template: '<div *ngIf="hero">' +
  '<h2>{{hero.name}} details</h2>' +
  '<div>' +
  '{{hero.name}}' +
  ' - ' +
  '{{hero.id}}' +
  '</div>' +
  '</div>'
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}
