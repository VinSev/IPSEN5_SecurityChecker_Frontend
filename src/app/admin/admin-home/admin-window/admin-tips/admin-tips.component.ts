import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/admin/admin.service';
import { Tips } from 'src/app/shared/models/tips.model';
import { TipsService } from 'src/app/scan/tips/tips.service';

@Component({
  selector: 'app-admin-tips',
  templateUrl: './admin-tips.component.html',
  styleUrls: ['./admin-tips.component.scss']
})
export class AdminTipsComponent implements OnInit {
  inEditMode: boolean = false;
  currentEditingTip: Tips = new Tips('');
  tips: Tips[] = [];

  constructor(private tipsService: TipsService) { }

  ngOnInit(): void {
    this.tipsService._currentusedTip.subscribe((result) =>{
      this.currentEditingTip = this.tipsService.tipmodel;
          
    });
  }

  goCreateANewTip(){
    this.inEditMode = false;  
  }

  public submit(tip: HTMLInputElement): boolean {
    console.log("submit");
    if(!this.checkIfFormInputIsValdid(tip)){
      return false;
    }
    if(this.inEditMode){
      this.tipsService.updateTip(tip.value);
      return true
    }
    this.tipsService.createTip(tip.value);
    return true;
  }

  public checkIfFormInputIsValdid(tip: HTMLInputElement): boolean{
    for(let input of [tip]) {
      if(!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }
    return true;
  }
  
  public deleteTip(){    
    this.tipsService.deleteTip()
  }
}
