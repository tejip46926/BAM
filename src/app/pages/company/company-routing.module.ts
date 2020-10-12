import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyPage } from './company';

const routes: Routes = [
  {
    path: '',
    component: CompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyPageRoutingModule { }
