import { Routes } from "@angular/router";

import { ModerationComponent } from "./moderation/moderation.component";
import { PublicComponent } from "./public/public.component";

export const routes: Routes = [
  { path: "public", component: PublicComponent },
  { path: "moderation", component: ModerationComponent },
  { path: "", redirectTo: "/public", pathMatch: "full" }
];
