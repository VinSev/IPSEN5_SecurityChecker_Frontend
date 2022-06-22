import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolGuardService } from './admin/role-guard-Service';
import {ResultComponent} from "./scan/result/result.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: 'admin',
    loadChildren: () => import("./admin/admin-home/admin-home.module").then(m => m.AdminHomeModule)
    ,canActivate: [RolGuardService], data: {expectedRole: "Admin"}
  },
  {
    path: 'scan',
    loadChildren: () => import("./scan/scan.module").then(m => m.ScanModule)
  },
  {
    path: 'result', component: ResultComponent
  },
  {
    path: '**', redirectTo:'home'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
