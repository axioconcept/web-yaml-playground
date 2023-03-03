import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHostComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DashboardHostComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
