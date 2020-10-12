import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SignupPage } from './signup';
import { SignupRoutingModule } from './signup-routing.module';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],

  declarations: [SignupPage],
})
export class SignupModule {}
