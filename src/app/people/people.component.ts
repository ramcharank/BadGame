import { Component, OnInit } from "@angular/core";
import { PeopleService } from "../shared/people.service";
import { IPeople } from "../shared/people";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.css"]
})
export class PeopleComponent implements OnInit {
  people: IPeople[];
  myName: string;
  pageTitle: string = "People";

  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit() {
    this.setPeople();
  }

  setPeople() {
    this.people = this.peopleService.getPeople();
  }

  addPerson() {
    this.router.navigate(["/addperson"]);
  }

  // getPeople() {
  //   this.peoples = this.peopeService.getPeople();
  // }
}
