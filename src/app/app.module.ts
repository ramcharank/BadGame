import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { PanelComponent } from "./panel/panel.component";
import { UserModule } from "./user/user.module";
import { GameModule } from "./game/game.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, PanelComponent],
  imports: [
    BrowserModule,
    UserModule,
    GameModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([{ path: "panel", component: PanelComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
