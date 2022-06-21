import { Component, OnInit } from '@angular/core';
import { reportService } from '../admin-scanresult/customer/report.service';

@Component({
  selector: 'app-admin-scanlimit',
  templateUrl: './admin-scanlimit.component.html',
  styleUrls: ['./admin-scanlimit.component.scss']
})
export class AdminScanlimitComponent implements OnInit {

  constructor(public reportService: reportService) { }

  ngOnInit(): void {
  }

  public submit(maxScanLimit: HTMLInputElement): boolean {
    if(!this.checkIfFormInputIsValdid(maxScanLimit)){
      return false;
    }
    this.reportService.changeMaxScanLimit(maxScanLimit);
    return true;
  }

  public checkIfFormInputIsValdid(tipValue: HTMLInputElement): boolean{
    for(let input of [tipValue]) {
      if(!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }
    return true;
  }

}
