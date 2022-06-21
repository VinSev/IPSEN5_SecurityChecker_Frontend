import {HomeComponent} from "./home.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

const routes = [
  {
    path: "", pathMatch: "full", component: HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

