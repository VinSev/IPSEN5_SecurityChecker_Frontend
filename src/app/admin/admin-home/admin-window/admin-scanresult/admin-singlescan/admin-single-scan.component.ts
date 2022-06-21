import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/shared/models/report.model';
import { reportService } from '../customer/report.service';

@Component({
  selector: 'app-admin-singlescan',
  templateUrl: './admin-single-scan.component.html',
  styleUrls: ['./admin-single-scan.component.scss']
})
export class AdminSingleScanComponent implements OnInit {

  constructor(public reportService: reportService) { }


  ngOnInit(): void {
    this.reportService.getAllCustomerDataFromDatabase();
  }

  onCustomerScanSelected(){

  }

  public onRapportSelected(rapport: Report){
    this.reportService.changeCurrentViewedRapport(rapport);
  }
}
