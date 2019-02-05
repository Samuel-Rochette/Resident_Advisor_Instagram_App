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
import { FormsModule } from "@angular/forms";

import { EventService } from "./services/event.service";
import { TermService } from "./services/term.service";
import { VideoService } from "./services/video.service";

import { AppComponent } from "./app.component";
import { ModerationComponent } from "./moderation/moderation.component";
import { PublicComponent } from "./public/public.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { DetailComponent } from "./detail/detail.component";
import { TermsComponent } from "./terms/terms.component";
import { EventsComponent } from './events/events.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    ModerationComponent,
    PublicComponent,
    NavbarComponent,
    DetailComponent,
    TermsComponent,
    EventsComponent,
    InfoComponent
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
    MatButtonModule,
    FormsModule
  ],
  providers: [EventService, TermService, VideoService],
  bootstrap: [AppComponent],
  entryComponents: [DetailComponent]
})
export class AppModule {}
