import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from '../tab2.page';
import { DatePickerTwoRoutingModule } from './date-picker-two-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DatePickerTwoRoutingModule
    ],
  exports: [RouterModule]
})
export class DatePickerTwoModule {}