import { Injectable, OnInit } from '@angular/core';


@Injectable()
export class GameService implements OnInit {

    constructor() { }

    ngOnInit() { }


    getGames() {
        return [
            {
                "GameId": "20191010070000",
                "Date": "10-Oct-2019",
                "Time": 6,
                "DurationInMin": 60,
                "Courts": 2,
                "PlayerCount": 10,
                "Cost": 200,
                "Players": ["Ram", "Aj", "Hartej"]
            },
            {
                "GameId": "20191010080000",
                "Date": "10-Oct-2019",
                "Time": 6,
                "DurationInMin": 60,
                "Courts": 2,
                "PlayerCount": 10,
                "Cost": 200,
                "Players": ["Ram", "Aj", "Hartej"]
            }
        ];
    }
}
