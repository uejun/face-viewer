import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FaceListComponent } from './face-list/face-list.component';
import {Ng2PaginationModule} from "ng2-pagination";
import {MaterialModule} from "@angular/material";
import {FaceHttpService} from "./face-list/face-http.service";

@NgModule({
  declarations: [
    AppComponent,
    FaceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule,
    MaterialModule.forRoot()
  ],
  providers: [
    FaceHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
