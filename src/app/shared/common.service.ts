import { Injectable } from "@angular/core";
import { PeopleService } from "../user/services/people.service";

@Injectable()
export class CommonService {
  constructor(private peopleService: PeopleService) {}

  getPlayers() {
    return this.peopleService.getPeople();
  }
}
