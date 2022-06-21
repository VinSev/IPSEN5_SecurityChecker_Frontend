import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AdminHomeRouterModule } from "./admin-home-routing.module";
import { AdminHomeComponent } from "./admin-home.component";
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminWindowComponent } from './admin-window/admin-window.component';
import { AdminTipsComponent } from './admin-window/admin-tips/admin-tips.component';
import { AdminScanresultComponent } from './admin-window/admin-scanresult/admin-scanresult.component';
import { AdminTipComponent } from "./admin-window/admin-tips/admin-tip/admin-tip.component";
import { AdminSingleScanComponent } from './admin-window/admin-scanresult/admin-singlescan/admin-single-scan.component';

@NgModule({
    imports: [
        CommonModule,
        AdminHomeRouterModule,
        FormsModule
    ],
    declarations: [
        AdminHomeComponent,
        AdminMenuComponent,
        AdminWindowComponent,
        AdminTipsComponent,
        AdminScanresultComponent,
        AdminTipComponent,
        AdminSingleScanComponent
    ],
    exports:[
    ]
})

export class AdminHomeModule {}
