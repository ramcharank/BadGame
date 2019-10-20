import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { PanelComponent } from "./panel/panel.component";
import { PeopleComponent } from "./people/people.component";
import { GamesComponent } from "./games/games.component";
import { PeopleService } from "./shared/people.service";
import { AddpersonComponent } from "./addperson/addperson.component";

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    PeopleComponent,
    GamesComponent,
    AddpersonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "people", component: PeopleComponent },
      { path: "games", component: GamesComponent },
      { path: "panel", component: PanelComponent },
      { path: "addperson", component: AddpersonComponent }
    ])
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
