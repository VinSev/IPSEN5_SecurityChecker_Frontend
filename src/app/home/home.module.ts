import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {FormsModule} from "@angular/forms";
import {HomeRoutingModule} from "./home-routing.module";
import {ScanModule} from "../scan/scan.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ScanModule,
    FormsModule
  ],
  declarations: [
    HomeComponent
  ],
  exports:[

  ]
})
export class HomeModule { }
