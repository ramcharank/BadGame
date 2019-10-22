import { NgModule } from "@angular/core";
import { GamesComponent } from "./components/games/games.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { GameService } from "./services/game.service";
import { GameCardComponent } from "./components/gamecard/gamecard.component";

@NgModule({
  declarations: [GamesComponent, GameCardComponent],
  imports: [
    RouterModule.forRoot([
      { path: "games", component: GamesComponent },
      { path: "gamecard", component: GameCardComponent }
    ]),
    BrowserModule
  ],
  providers: [GameService]
})
export class GameModule {}
