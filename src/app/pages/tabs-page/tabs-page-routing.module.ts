import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { ApprenticeshipPage } from '../apprenticeship/apprenticeship';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'signup',
        children: [
          {
            path: '',
            loadChildren: () => import('../signup/signup.module').then(m => m.SignupModule)
          }
        ]
      },
      {
        path: 'company',
        children: [
          {
            path: '',
            loadChildren: () => import('../company/company.module').then(m => m.CompanyModule)
          }
        ]
      },
      {
        path: 'apprenticeship',
        children: [
          {
            path: '',
            loadChildren: () => import('../apprenticeship/apprenticeship.module').then(m => m.ApprenticeshipModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/signup',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

