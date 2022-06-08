import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminHomeComponent } from "./admin-home.component";

const routes = [
    {
        path: "", pathMatch: "full", component: AdminHomeComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AdminHomeRouterModule{
    
}