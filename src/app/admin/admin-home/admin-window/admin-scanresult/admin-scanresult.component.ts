import { Component, OnInit } from '@angular/core';
import { raportService } from './customer/raport.service';

@Component({
  selector: 'app-admin-scanresult',
  templateUrl: './admin-scanresult.component.html',
  styleUrls: ['./admin-scanresult.component.scss']
})
export class AdminScanresultComponent implements OnInit {

  constructor(public raportService: raportService) { }

  ngOnInit(): void {
    this.customerservice.getAllCustomerDataFromDatabase();

  }

}
