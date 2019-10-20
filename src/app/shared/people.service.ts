import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IPeople } from "./people";

@Injectable()
export class PeopleService {
  private peopleUrl = "./app/data.json";
  peoples: IPeople[];
  private url: string = "./test.json";
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
