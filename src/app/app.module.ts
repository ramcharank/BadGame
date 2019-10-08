import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { PeopleComponent } from './people/people.component';
import { GamesComponent } from './games/games.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    PeopleComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "people", component: PeopleComponent },
      { path: "games", component: GamesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
