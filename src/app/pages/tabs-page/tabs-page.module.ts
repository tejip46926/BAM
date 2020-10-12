import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { CompanyModule } from '../company/company.module';
import { ApprenticeshipModule } from '../apprenticeship/apprenticeship.module';
import { SignupModule } from '../signup/signup.module';


@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    CompanyModule,
    ApprenticeshipModule,
    SignupModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
