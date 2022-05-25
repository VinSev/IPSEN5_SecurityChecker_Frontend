import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";

const routes = [
  {
    path: "", pathMatch: "full", component:AdminComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {

}
