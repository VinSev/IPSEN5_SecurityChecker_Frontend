import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScanComponent } from './scan/scan.component';
import {ScanRoutingModule} from "./scan-routing.module";
import {TipsComponent} from "./tips/tips.component";
import {SharedModule} from "../shared/shared.module";
import {ResultComponent} from "./result/result.component";
import {FormsModule} from "@angular/forms";



@NgModule({
    imports: [
        CommonModule,
        ScanRoutingModule,
        SharedModule,
        FormsModule
    ],
  declarations: [
    ScanComponent,
    TipsComponent,
    ResultComponent
  ],
  exports:[
    ScanComponent,
    TipsComponent,
    ResultComponent
  ]
})
export class ScanModule { }
