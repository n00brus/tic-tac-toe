import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { landType } from '../model/model';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent implements OnInit {
  @Input() cell: landType;
  @Output() toggleCell = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  move(ev, cell): void {
    this.toggleCell.emit(cell);
  }
}
