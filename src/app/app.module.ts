import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { PanelComponent } from "./panel/panel.component";
import { UserModule } from "./user/user.module";
import { GameModule } from "./game/game.module";
import { CommonService } from "./shared/common.service";

@NgModule({
  declarations: [AppComponent, PanelComponent],
  imports: [
    BrowserModule,
    UserModule,
    GameModule,
    RouterModule.forRoot([{ path: "panel", component: PanelComponent }])
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
