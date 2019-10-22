import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { IGame } from '../../models/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  pageTitle = "Games";
  games: IGame[];
  constructor(private gameService: GameService,
    private router: Router) { }

  ngOnInit() {
      this.setGames();
   }

  setGames() {
    this.games = this.gameService.getGames();
  }

  gameCard() {
    this.router.navigate(['/gamecard']);
  }
}
