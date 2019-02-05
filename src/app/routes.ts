import { Routes } from "@angular/router";

import { ModerationComponent } from "./moderation/moderation.component";
import { PublicComponent } from "./public/public.component";
import { TermsComponent } from "./terms/terms.component";
import { EventsComponent } from "./events/events.component";

export const routes: Routes = [
  { path: "public", component: PublicComponent },
  { path: "moderation", component: ModerationComponent },
  { path: "terms", component: TermsComponent },
  { path: "events", component: EventsComponent },
  { path: "", redirectTo: "/public", pathMatch: "full" }
];
