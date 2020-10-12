import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckTutorial } from "./services/check-tutorial.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/start",
    pathMatch: "full",
  },
  {
    path: "app",
    loadChildren: () =>
      import("./pages/tabs-page/tabs-page.module").then((m) => m.TabsModule),
  },
  {
    path: "start",
    loadChildren: () =>
      import("./pages/tutorial/tutorial.module").then((m) => m.TutorialModule),
    canLoad: [CheckTutorial],
  },
  {
    path: "jobdetail",
    loadChildren: () =>
      import("./modals/jobdetail/jobdetail.module").then(
        (m) => m.JobdetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
