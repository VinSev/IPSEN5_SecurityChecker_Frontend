import { Component, OnInit } from '@angular/core';
import { customerService } from '../admin-Customer-Result/customer.service';

@Component({
  selector: 'app-admin-singlescan',
  templateUrl: './admin-singlescan.component.html',
  styleUrls: ['./admin-singlescan.component.scss']
})
export class AdminSinglescanComponent implements OnInit {

  constructor(public customerService: customerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomerDataFromDataBase();
  }

  onCustomerScanSelected(){

  }

}
