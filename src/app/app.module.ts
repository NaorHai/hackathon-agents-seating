import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop' 
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SeatComponent } from './seat/seat.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SeatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
