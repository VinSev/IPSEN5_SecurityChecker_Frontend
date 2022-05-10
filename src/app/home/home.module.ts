import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {FormsModule} from "@angular/forms";
import {HomeRoutingModule} from "./home-routing.module";
import {ScanModule} from "../scan-progress/scan.module";



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
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
