import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Accordion, AccordionGroup} from './accordion';
import { AppComponent }   from './app.component';
import { SSolarService } from './ssystem.services';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ Accordion, AccordionGroup, AppComponent ],
  providers: [ SSolarService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

