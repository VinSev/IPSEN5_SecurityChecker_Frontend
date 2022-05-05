import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScanComponent } from './scan/scan.component';
import {ScanRoutingModule} from "./scan-routing.module";
import {TipsComponent} from "./tips/tips.component";



@NgModule({
  imports: [
    CommonModule,
    ScanRoutingModule
  ],
  declarations: [
    ScanComponent,
    TipsComponent
  ],
  exports:[
    ScanComponent,
    TipsComponent
  ]
})
export class ScanModule { }
