import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'app-date-picker-two',
    loadChildren: () => import('./app-date-picker-two/date-picker-two.module').then(m => m.DatePickerTwoModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
