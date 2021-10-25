import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinusRoutingModule } from './joinus-routing.module';
import { FacebookComponent } from './facebook/facebook.component';
import { TwitterComponent } from './twitter/twitter.component';
import { TelegramComponent } from './telegram/telegram.component';
import { JoinpageComponent } from './joinpage/joinpage.component';


@NgModule({
  declarations: [
    FacebookComponent,
    TwitterComponent,
    TelegramComponent,
    JoinpageComponent
  ],
  imports: [
    CommonModule,
    JoinusRoutingModule
  ],
  exports: [
    JoinpageComponent,

  ], 
})
export class JoinusModule { }
