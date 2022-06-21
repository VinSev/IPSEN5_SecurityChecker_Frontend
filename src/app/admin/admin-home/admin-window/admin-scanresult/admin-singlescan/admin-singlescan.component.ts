import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/shared/models/report.model';
import { raportService } from '../customer/raport.service'; 

@Component({
  selector: 'app-admin-singlescan',
  templateUrl: './admin-singlescan.component.html',
  styleUrls: ['./admin-singlescan.component.scss']
})
export class AdminSinglescanComponent implements OnInit {

  constructor(public raportService: raportService) { }


  ngOnInit(): void {
    this.raportService.getAllCustomerDataFromDatabase();
  }

  onCustomerScanSelected(){

  }

  public onRapportSelected(rapport: Report){
    this.raportService.changeCurrentViewedRapport(rapport);
  }
}
