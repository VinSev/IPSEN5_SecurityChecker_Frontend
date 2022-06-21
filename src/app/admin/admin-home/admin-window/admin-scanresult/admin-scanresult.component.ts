import { Component, OnInit } from '@angular/core';
import { reportService } from './customer/report.service';

@Component({
  selector: 'app-admin-scanresult',
  templateUrl: './admin-scanresult.component.html',
  styleUrls: ['./admin-scanresult.component.scss']
})
export class AdminScanresultComponent implements OnInit {

  constructor(public reportService: reportService) { }

  ngOnInit(): void {
    this.reportService.getAllCustomerDataFromDatabase();

  }

}
