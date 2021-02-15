import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlComponent } from './game/control/control.component';
import { CellComponent } from './game/cell/cell.component';
import { ConsoleMenuComponent } from './game/console-menu/console-menu.component';
import { RegisterwindowComponent } from './registerwindow/registerwindow.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalWinnerComponent } from './game/modal-winner/modal-winner.component';
import { ModalDrawComponent } from './game/modal-draw/modal-draw.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    CellComponent,
    ConsoleMenuComponent,
    RegisterwindowComponent,
    ModalWinnerComponent,
    ModalDrawComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
