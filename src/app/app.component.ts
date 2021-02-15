import { Component, Input, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { ControlComponent } from './game/control/control.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tic-tacToe';
  players;
  register(ev) {
    this.players = ev;
  }
}
