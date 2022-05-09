import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ResultComponent} from "./result/result.component";

const routes = [
  {
    path: "", pathMatch: "full", component:ResultComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultRoutingModule {}
