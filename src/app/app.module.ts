import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeatComponent } from './seat/seat.component';
import {FormsModule} from '@angular/forms';
import { SeatBiddingComponent } from './pages/seat-bidding/seat-bidding.component';

@NgModule({
  declarations: [
    AppComponent,
    SeatComponent,
    SeatBiddingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
