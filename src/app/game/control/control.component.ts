import { Component, Input, OnInit } from '@angular/core';
import { landType, moveType, PlayerModel } from '../model/model';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
})
export class ControlComponent implements OnInit {
  counter: number = 0;
  @Input() players: PlayerModel;
  score: number[] = [0, 0];
  winner: string = '';
  showModal_winner: boolean = false;
  showModal_draw: boolean = false;
  cells: landType[] = [
    { id: 1, moveType: '' },
    { id: 2, moveType: '' },
    { id: 3, moveType: '' },
    { id: 2, moveType: '' },
    { id: 5, moveType: '' },
    { id: 6, moveType: '' },
    { id: 7, moveType: '' },
    { id: 8, moveType: '' },
    { id: 9, moveType: '' },
  ];

  public redLinePosition = {
    rotated: false,
    left: false,
    right: false,
    display: false,
    bottom: false,
    top: false,
    halfrotated: false,
    overRotated: false,
  };

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {}
  toggleCell(cell): void {
    this.cells.find((ob) => {
      if (ob == cell) {
        if (cell.moveType == '') {
          if (this.counter % 2 == 0) {
            cell.moveType = 'cross';
          } else {
            cell.moveType = 'zero';
          }
          this.counter++;

          return cell;
        }
      }
    });
    this.checkwinner();
  }

  checkwinner(): void {
    for (let i = 0; i < this.cells.length; i += 3) {
      if (
        this.cells[i].moveType == this.cells[i + 1].moveType &&
        this.cells[i].moveType == this.cells[i + 2].moveType &&
        this.cells[i].moveType != ''
      ) {
        if (i == 0) {
          this.redLinePosition.top = true;
        }

        if (i == 6) {
          this.redLinePosition.bottom = true;
        }

        this.redLinePosition.display = true;
        this.addWinnerPoint(this.cells[i].moveType);

        return;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        this.cells[i].moveType == this.cells[i + 3].moveType &&
        this.cells[i].moveType == this.cells[i + 6].moveType &&
        this.cells[i].moveType != ''
      ) {
        if (i == 0) {
          this.redLinePosition.left = true;
        }

        if (i == 2) {
          this.redLinePosition.right = true;
        }

        this.redLinePosition.display = true;
        this.redLinePosition.rotated = true;
        this.addWinnerPoint(this.cells[i].moveType);

        return;
      }
    }
    if (
      this.cells[2].moveType == this.cells[4].moveType &&
      this.cells[4].moveType == this.cells[6].moveType &&
      this.cells[2].moveType != ''
    ) {
      this.redLinePosition.display = true;
      this.redLinePosition.overRotated = true;
      this.addWinnerPoint(this.cells[2].moveType);
      return;
    }
    if (
      this.cells[0].moveType == this.cells[4].moveType &&
      this.cells[4].moveType == this.cells[8].moveType &&
      this.cells[0].moveType != ''
    ) {
      this.redLinePosition.display = true;
      this.redLinePosition.halfrotated = true;
      this.addWinnerPoint(this.cells[0].moveType);

      return;
    }
    this.checkDraw();
  }
  checkDraw() {
    let counter: number = 0;
    let checker = 0;
    this.cells.forEach((cell) => {
      if (cell.moveType) {
        counter++;
      }
    });
    if (counter == 9) {
      this.showModal_draw = true;
    }
    for (let i = 0; i < this.cells.length; i += 3) {
      if (
        (this.cells[i].moveType != this.cells[i + 1].moveType &&
          this.cells[i].moveType != '' &&
          this.cells[i + 1].moveType != '') ||
        (this.cells[i].moveType != this.cells[i + 2].moveType &&
          this.cells[i].moveType != '' &&
          this.cells[i + 2].moveType != '') ||
        (this.cells[i + 1].moveType != this.cells[i + 2].moveType &&
          this.cells[i + 1].moveType != '' &&
          this.cells[i + 2].moveType != '')
      ) {
        checker++;
      }
    }
    for (let i = 0; i < 3; i += 1) {
      if (
        (this.cells[i].moveType != this.cells[i + 3].moveType &&
          this.cells[i].moveType != '' &&
          this.cells[i + 3].moveType != '') ||
        (this.cells[i].moveType != this.cells[i + 6].moveType &&
          this.cells[i].moveType != '' &&
          this.cells[i + 6].moveType != '') ||
        (this.cells[i + 3].moveType != this.cells[i + 6].moveType &&
          this.cells[i + 3].moveType != '' &&
          this.cells[i + 6].moveType != '')
      ) {
        checker++;
      }
    }
    if (
      (this.cells[0].moveType != this.cells[4].moveType &&
        this.cells[0].moveType != '' &&
        this.cells[4].moveType != '') ||
      (this.cells[0].moveType != this.cells[8].moveType &&
        this.cells[0].moveType != '' &&
        this.cells[8].moveType != '') ||
      (this.cells[4].moveType != this.cells[8].moveType &&
        this.cells[4].moveType != '' &&
        this.cells[8].moveType != '')
    ) {
      checker++;
    }
    if (
      (this.cells[2].moveType != this.cells[4].moveType &&
        this.cells[2].moveType != '' &&
        this.cells[4].moveType != '') ||
      (this.cells[2].moveType != this.cells[6].moveType &&
        this.cells[2].moveType != '' &&
        this.cells[6].moveType != '') ||
      (this.cells[4].moveType != this.cells[6].moveType &&
        this.cells[4].moveType != '' &&
        this.cells[6].moveType != '')
    ) {
      checker++;
    }
    if (checker == 8) {
      this.showModal_draw = true;
    }
  }
  addWinnerPoint(type: moveType): void {
    if (type == 'cross') {
      this.score[0]++;
      this.winner = this.players.firstPlayer;
    } else {
      this.score[1]++;
      this.winner = this.players.secondPlayer;
    }
    this.showModal_winner = true;
    // this.reset();
  }

  reset(): void {
    this.cells = [
      { id: 1, moveType: '' },
      { id: 2, moveType: '' },
      { id: 3, moveType: '' },
      { id: 2, moveType: '' },
      { id: 5, moveType: '' },
      { id: 6, moveType: '' },
      { id: 7, moveType: '' },
      { id: 8, moveType: '' },
      { id: 9, moveType: '' },
    ];

    this.redLinePosition.display = false;
    this.redLinePosition.halfrotated = false;
    this.redLinePosition.overRotated = false;
    this.redLinePosition.rotated = false;
    this.redLinePosition.right = false;
    this.redLinePosition.left = false;
    this.redLinePosition.top = false;
    this.redLinePosition.bottom = false;
    this.showModal_winner = false;
    this.counter = 0;
    this.showModal_draw = false;
  }
}
