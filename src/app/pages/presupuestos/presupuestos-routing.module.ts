import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresupuestosPage } from './presupuestos.page';

const routes: Routes = [
  {
    path: '',
    component: PresupuestosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresupuestosPageRoutingModule {}
