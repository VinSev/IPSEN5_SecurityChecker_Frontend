import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ResultComponent} from "./result/result.component";
import {ResultRoutingModule} from "./result-routing.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
    imports: [
        CommonModule,
        ResultRoutingModule,
        SharedModule
    ],
  declarations: [
    ResultComponent
  ],
  exports:[
    ResultComponent
  ]
})
export class ResultModule { }
