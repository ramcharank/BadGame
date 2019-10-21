import { Injectable } from "@angular/core";
import { IPeople } from "../models/people";

@Injectable()
export class PeopleService {
  peoples: IPeople[];
  myName: string;

  constructor() {}

  ngOnInit() {}

  getPeople() {
    return [
      {
        Name: "Ram",
        Due: 10
      },
      {
        Name: "Hartej",
        Due: 200
      }
    ];
  }

  getName() {
    return this.myName;
  }
}
