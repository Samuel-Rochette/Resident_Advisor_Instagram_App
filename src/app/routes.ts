import { Routes } from "@angular/router";

import { ModerationComponent } from "./moderation/moderation.component";
import { PublicComponent } from "./public/public.component";
import { TermsComponent } from "./terms/terms.component";
import { EventsComponent } from "./events/events.component";
import { PastComponent } from "./past/past.component";

export const routes: Routes = [
  { path: "public", component: PublicComponent },
  { path: "moderation", component: ModerationComponent },
  { path: "terms", component: TermsComponent },
  { path: "upcomingevents", component: EventsComponent },
  { path: "pastevents", component: PastComponent },
  { path: "", redirectTo: "/public", pathMatch: "full" }
];
