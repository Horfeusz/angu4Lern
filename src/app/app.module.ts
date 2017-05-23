import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MyFirstCompComponent} from './my-first-comp/my-first-comp.component';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyDataService} from './my-data.service';
import {MyDatePipe} from './my-date.pipe';
import { MyComp2Component } from './my-comp2/my-comp2.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { StartComponent } from './start/start.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ColoresDirective } from './colres.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    MyDatePipe,
    MyComp2Component,
    StartComponent,
    MainContentComponent,
    ColoresDirective
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
