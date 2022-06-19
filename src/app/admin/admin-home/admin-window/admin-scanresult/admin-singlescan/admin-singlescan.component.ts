import { Component, OnInit } from '@angular/core';
import { customerService } from '../customer/rapport.service';
import { rapport } from '../customer/rapport.model';

@Component({
  selector: 'app-admin-singlescan',
  templateUrl: './admin-singlescan.component.html',
  styleUrls: ['./admin-singlescan.component.scss']
})
export class AdminSinglescanComponent implements OnInit {

  constructor(public customerservice: customerService) { }

  ngOnInit(): void {
  }

  public onRapportSelected(rapport: rapport){
    this.customerservice.changeCurrentViewedRapport(rapport);
  }
}
