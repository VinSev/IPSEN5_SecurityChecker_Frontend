import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";


@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule
    ],
  declarations: [
    AdminComponent
  ],
  exports:[
  ]
})
export class AdminModule { }
