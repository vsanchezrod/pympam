import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'list',
        loadChildren: () => import('../../list/list.module').then(m => m.ListPageModule)
      },
      {
        path: 'presupuestos',
        loadChildren: () => import('../presupuestos/presupuestos.module').then( m => m.PresupuestosPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DashboardPageRoutingModule {}
