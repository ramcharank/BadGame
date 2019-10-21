import { NgModule } from "@angular/core";
import { GamesComponent } from "./components/games/games.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [GamesComponent],
  imports: [
    RouterModule.forRoot([{ path: "games", component: GamesComponent }])
  ],
  providers: []
})
export class GameModule {}
