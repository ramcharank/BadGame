import { Component, OnInit } from "@angular/core";
import { GameService } from "../../services/game.service";
import { IPeople } from "../../../user/models/people";

@Component({
  selector: "app-addgame",
  templateUrl: "./addgame.component.html",
  styleUrls: ["./addgame.component.css"]
})
export class AddgameComponent implements OnInit {
  model: any;
  players: IPeople[];
  playingTeam: IPeople[];
  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.players = this.gameService.getPlayers();
  }

  selectPlayer(player: any) {
    if (!this.playingTeam) {
      this.playingTeam = [];
    } else if (this.playingTeam.indexOf(player) !== -1) {
      return;
    }
    this.playingTeam.push(player);
  }

  removePlayer(player: any) {
    if (!this.playingTeam) {
      return;
    } else if (this.playingTeam.indexOf(player) !== -1) {
      this.playingTeam.splice(this.playingTeam.indexOf(player), 1);
    }
  }
}
