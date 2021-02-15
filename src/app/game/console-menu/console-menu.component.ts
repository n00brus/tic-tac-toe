import { Component, Input, OnInit } from '@angular/core';
import { PlayerModel } from '../model/model';

@Component({
  selector: 'app-console-menu',
  templateUrl: './console-menu.component.html',
  styleUrls: ['./console-menu.component.css'],
})
export class ConsoleMenuComponent implements OnInit {
  @Input() score: number[];
  constructor() {
    // this.players.firstPlayer = '';
    // this.players.secondPlayer = '';
  }
  @Input() players: PlayerModel;

  ngOnInit(): void {}
  ngOnChanges(): void {}
}
