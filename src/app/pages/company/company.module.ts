import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CompanyPage } from './company';
import { CompanyPageRoutingModule } from './company-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CompanyPageRoutingModule
  ],
  declarations: [
    CompanyPage,
  ]
})
export class CompanyModule { }
