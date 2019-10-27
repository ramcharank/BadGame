import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule, Router } from "@angular/router";
import { GameService } from "../../services/game.service";
import { IGame } from "../../models/game";

@Component({
  selector: "app-gamecard",
  templateUrl: "./gamecard.component.html",
  styleUrls: ["./gamecard.component.css"]
})
export class GameCardComponent implements OnInit {
  selectedGame: IGame;

  constructor(
    private _route: ActivatedRoute,
    private service: GameService,
    private router: Router
  ) {}

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get("id");
    this.getGameDetails(param);
  }

  getGameDetails(gameId: string) {
    this.service.getGames().forEach(game => {
      this.selectedGame = game;
    });
  }

  onBack() {
    this.router.navigate(["/games"]);
  }
}
