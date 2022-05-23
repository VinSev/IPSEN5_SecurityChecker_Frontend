import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/error-components/not-found/not-found.component";
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
    path: 'scan',
    loadChildren: () => import("./scan/scan.module").then(m => m.ScanModule)
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
