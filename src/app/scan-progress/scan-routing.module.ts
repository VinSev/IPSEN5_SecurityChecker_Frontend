import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TipsComponent} from "./tips/tips.component";

const routes = [
  {
    path: '', component:TipsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanRoutingModule {

}
