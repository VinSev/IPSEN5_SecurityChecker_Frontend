import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GeneralErrorComponent} from "./error-components/general-error/general-error.component";
import {SpinningComponent} from "./loading-components/spinning/spinning.component";
import { NotFoundComponent } from './error-components/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    GeneralErrorComponent,
    SpinningComponent,
    NotFoundComponent
  ],
  exports:[
    GeneralErrorComponent,
    SpinningComponent
  ]
})
export class SharedModule { }
