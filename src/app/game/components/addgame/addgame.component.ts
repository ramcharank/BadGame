import { Component, OnInit } from "@angular/core";
import { IPeople } from "src/app/user/models/people";
import { GameService } from "../../services/game.service";

@Component({
  selector: "app-addgame",
  templateUrl: "./addgame.component.html",
  styleUrls: ["./addgame.component.css"]
})
export class AddgameComponent implements OnInit {
  model: any;
  players: IPeople[];
  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.players = this.gameService.getPlayers();
  }
}
