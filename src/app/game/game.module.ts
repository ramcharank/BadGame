import { NgModule } from "@angular/core";
import { GamesComponent } from "./components/games/games.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { GameService } from "./services/game.service";
import { GameCardComponent } from "./components/gamecard/gamecard.component";
import { AddgameComponent } from "./components/addgame/addgame.component";

@NgModule({
  declarations: [GamesComponent, GameCardComponent, AddgameComponent],
  imports: [
    RouterModule.forRoot([
      { path: "games", component: GamesComponent },
      { path: "games/:id", component: GameCardComponent },
      { path: "addgame", component: AddgameComponent }
    ]),
    BrowserModule
  ],
  providers: [GameService]
})
export class GameModule {}
