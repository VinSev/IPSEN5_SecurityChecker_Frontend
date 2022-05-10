import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScanComponent } from './scan/scan.component';
import {ScanRoutingModule} from "./scan-routing.module";
import {TipsComponent} from "./tips/tips.component";
import {ResultModule} from "../result/result.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  imports: [
    CommonModule,
    ScanRoutingModule,
    SharedModule,
    ResultModule
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
