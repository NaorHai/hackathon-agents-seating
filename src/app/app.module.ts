import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop' 
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
