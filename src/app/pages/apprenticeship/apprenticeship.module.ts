import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ApprenticeshipPage } from './apprenticeship';
import { AprenticeshipPageRoutingModule } from './apprenticeship-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprenticeshipPageRoutingModule
    ],
  declarations: [
    ApprenticeshipPage  ]
})
export class ApprenticeshipModule { }
