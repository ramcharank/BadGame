import { NgModule } from "@angular/core";
import { GamesComponent } from "./components/games/games.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { GameService } from "./services/game.service";
import { GameCardComponent } from "./components/gamecard/gamecard.component";
import { AddgameComponent } from "./components/addgame/addgame.component";
import { NgbModule, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { PeopleService } from "../user/services/people.service";
import { DatePickerComponent } from './components/datepicker/datepicker.componen';

@NgModule({
  declarations: [GamesComponent, GameCardComponent, AddgameComponent, DatePickerComponent],
  imports: [
    RouterModule.forRoot([
      { path: "games", component: GamesComponent },
      { path: "games/:id", component: GameCardComponent },
      { path: "addgame", component: AddgameComponent }
    ]),
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [GameService]
})
export class GameModule {}
