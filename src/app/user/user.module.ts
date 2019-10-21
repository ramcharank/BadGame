import { NgModule } from "@angular/core";
import { PeopleComponent } from "./components/people/people.component";
import { AddpersonComponent } from "./components/addperson/addperson.component";
import { RouterModule } from "@angular/router";
import { PeopleService } from "./services/people.service";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [PeopleComponent, AddpersonComponent],
  imports: [
    RouterModule.forRoot([
      { path: "people", component: PeopleComponent },
      { path: "addperson", component: AddpersonComponent }
    ]),
    BrowserModule
  ],
  providers: [PeopleService]
})
export class UserModule {}
