import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-admin-tips',
  templateUrl: './admin-tips.component.html',
  styleUrls: ['./admin-tips.component.scss']
})
export class AdminTipsComponent implements OnInit {
  inEditMode: boolean = true;

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {    
  }

  goCreateANewTip(){
    this.inEditMode = !this.inEditMode;    
  }

  public submit(tip: HTMLInputElement): boolean {
    console.log("submit");
    
    for(let input of [tip]) {
      if(!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }
      // this.adminService.updateTip(tip.value);
    return true;
  }

  public submitCreate(tip: HTMLInputElement): boolean {
    console.log("submit");
    
    for(let input of [tip]) {
      if(!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }
      // this.adminService.createTip(tip.value);
    return true;
  }
  
  public deleteTip(){
    this.adminService.deleteTip()
  }

}
