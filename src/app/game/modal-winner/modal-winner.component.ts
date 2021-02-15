import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-winner',
  templateUrl: './modal-winner.component.html',
  styleUrls: ['./modal-winner.component.css'],
})
export class ModalWinnerComponent implements OnInit {
  constructor() {}
  @Input() winner;
  @Output() reset = new EventEmitter();
  ngOnInit(): void {}
  closewindow(ev) {
    this.reset.emit('');
  }
}
