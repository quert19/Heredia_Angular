import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './facebook/facebook.component';
import { JoinpageComponent } from './joinpage/joinpage.component';
import { TelegramComponent } from './telegram/telegram.component';
import { TwitterComponent } from './twitter/twitter.component';


const routes: Routes = [{
  path: 'joinus', component: JoinpageComponent,
  children: [
    { path: 'facebook', component: FacebookComponent },
    { path: 'telegram', component: TelegramComponent },
    { path: 'twitter', component: TwitterComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinusRoutingModule { }
