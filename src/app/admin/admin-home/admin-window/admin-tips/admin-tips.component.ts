import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-admin-tips',
  templateUrl: './admin-tips.component.html',
  styleUrls: ['./admin-tips.component.scss']
})
export class AdminTipsComponent implements OnInit {
  inEditMode: boolean = false;

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {    
  }

  public submit(tip: HTMLInputElement): boolean {
    for(let input of [tip]) {
      if(!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }
    if(this.inEditMode){
      this.adminService.updateTip(tip.value);
      return true;
    }
      this.adminService.createTip(tip.value);
    return true;
  }
  
  public deleteTip(){
    this.adminService.deleteTip()
  }

}
