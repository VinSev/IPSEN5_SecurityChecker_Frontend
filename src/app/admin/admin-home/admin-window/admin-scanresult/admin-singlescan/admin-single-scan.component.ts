import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/shared/models/report.model';
import { raportService } from '../customer/raport.service';

@Component({
  selector: 'app-admin-singlescan',
  templateUrl: './admin-single-scan.component.html',
  styleUrls: ['./admin-single-scan.component.scss']
})
export class AdminSingleScanComponent {

  constructor(public reportService: raportService) { }

  public onRapportSelected(rapport: Report){
    this.reportService.changeCurrentViewedRapport(rapport);
  }
}
