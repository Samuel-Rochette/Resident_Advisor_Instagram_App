import { Routes } from "@angular/router";

import { ModerationComponent } from "./moderation/moderation.component";
import { PublicComponent } from "./public/public.component";
import { TermsComponent } from "./terms/terms.component";

export const routes: Routes = [
  { path: "public", component: PublicComponent },
  { path: "moderation", component: ModerationComponent },
  { path: "terms", component: TermsComponent },
  { path: "", redirectTo: "/public", pathMatch: "full" }
];
