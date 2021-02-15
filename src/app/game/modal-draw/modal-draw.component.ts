import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-draw',
  templateUrl: './modal-draw.component.html',
  styleUrls: ['./modal-draw.component.css'],
})
export class ModalDrawComponent implements OnInit {
  @Output() reset = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  restart(ev) {
    this.reset.emit('');
  }
}
