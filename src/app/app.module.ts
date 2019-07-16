// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop'
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SeatComponent } from './seat/seat.component';
// @ts-ignore
import {FormsModule} from '@angular/forms';
import { SeatBiddingComponent } from './pages/seat-bidding/seat-bidding.component';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SeatDesignerComponent } from './pages/seat-desginer/seat-designer.component';

const appRoutes: Routes = [
  { path: 'designer', component: SeatDesignerComponent },
  { path: 'seatBidding', component: SeatBiddingComponent },
  { path: '',
    redirectTo: '/seatBidding',
    pathMatch: 'full'
  },
  { path: '**', component: SeatBiddingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SeatComponent,
    SeatBiddingComponent,
    SeatDesignerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    DragDropModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
