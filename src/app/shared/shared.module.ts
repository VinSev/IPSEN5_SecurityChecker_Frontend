import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SpinningComponent} from "./loading-components/spinning/spinning.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SpinningComponent,
  ],
  exports:[
    SpinningComponent
  ]
})
export class SharedModule { }
