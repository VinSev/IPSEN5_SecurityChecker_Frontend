import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ScanComponent} from "./scan/scan.component";

const routes = [
  {
    path: '', component:ScanComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanRoutingModule {

}
