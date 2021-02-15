import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registerwindow',
  templateUrl: './registerwindow.component.html',
  styleUrls: ['./registerwindow.component.css'],
})
export class RegisterwindowComponent implements OnInit {
  @Output() players = new EventEmitter();
  profileForm = new FormGroup({
    firstPlayer: new FormControl(''),
    secondPlayer: new FormControl(''),
  });
  constructor() {}
  ngOnInit(): void {}
  register(event): void {
    event.preventDefault();
    // console.log('asd');
    let playerobject = {
      firstPlayer: this.profileForm.get('firstPlayer').value.trim(),
      secondPlayer: this.profileForm.get('secondPlayer').value.trim(),
    };
    if (playerobject.firstPlayer == '') {
      playerobject.firstPlayer = 'Player1';
    }
    if (playerobject.secondPlayer == '') {
      playerobject.secondPlayer = 'Player2';
    }
    this.players.emit(playerobject);
  }
}

// this.toggleCell.emit(cell);
