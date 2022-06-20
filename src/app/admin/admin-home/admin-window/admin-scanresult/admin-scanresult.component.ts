import { Component, OnInit } from '@angular/core';
import { customerService } from './customer/rapport.service';

@Component({
  selector: 'app-admin-scanresult',
  templateUrl: './admin-scanresult.component.html',
  styleUrls: ['./admin-scanresult.component.scss']
})
export class AdminScanresultComponent implements OnInit {

  constructor(public customerservice: customerService) { }

  ngOnInit(): void {
    this.customerservice.getAllCustomerDataFromDatabase();

  }

}
