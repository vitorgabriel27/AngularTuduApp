import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerTwoComponent} from './date-picker-two.component';

const routes: Routes = [
  {
    path: '',
    component: DatePickerTwoComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatePickerTwoRoutingModule {}