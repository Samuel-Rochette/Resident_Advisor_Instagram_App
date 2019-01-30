import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AlertModule } from "ngx-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { NgxPaginationModule } from "ngx-pagination";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule, MatButtonModule } from "@angular/material";

import { ModerationService } from "./services/moderation.service";

import { AppComponent } from "./app.component";
import { ModerationComponent } from "./moderation/moderation.component";
import { PublicComponent } from "./public/public.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { DetailComponent } from "./detail/detail.component";

@NgModule({
  declarations: [
    AppComponent,
    ModerationComponent,
    PublicComponent,
    NavbarComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [ModerationService],
  bootstrap: [AppComponent],
  entryComponents: [DetailComponent]
})
export class AppModule {}
