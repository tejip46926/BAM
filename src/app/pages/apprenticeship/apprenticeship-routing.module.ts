import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ApprenticeshipPage } from "./apprenticeship";

const routes: Routes = [
  {
    path: "",
    component: ApprenticeshipPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprenticeshipPageRoutingModule {}
