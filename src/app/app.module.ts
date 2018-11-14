import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {PagerService} from './services/index';
import {Userservice} from './services/user';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [PagerService, Userservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
