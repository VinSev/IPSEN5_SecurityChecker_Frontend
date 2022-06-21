import { Component, OnInit } from '@angular/core';
import { raportService } from '../customer/raport.service'; 

@Component({
  selector: 'app-admin-singlescan',
  templateUrl: './admin-singlescan.component.html',
  styleUrls: ['./admin-single-scan.component.scss']
})
export class AdminScanlimitComponent implements OnInit {

  constructor(public raportService: raportService) { }


  ngOnInit(): void {
    this.raportService.getAllCustomerDataFromDatabase();
  }

  onCustomerScanSelected(){

  }

  public onRapportSelected(rapport: Raport){
    this.raportService.changeCurrentViewedRapport(rapport);
  }
}
