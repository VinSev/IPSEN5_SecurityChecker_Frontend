import { Component, OnInit } from '@angular/core';
import { Tips } from 'src/app/shared/models/tips.model';
import { TipsService } from 'src/app/scan/tips/tips.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-tips',
  templateUrl: './admin-tips.component.html',
  styleUrls: ['./admin-tips.component.scss']
})
export class AdminTipsComponent implements OnInit {
  inEditMode: boolean = false;
  tips: Tips[] = [];

  tipForm!: FormGroup;

  constructor(public tipsService: TipsService) { }

  ngOnInit(): void {
    this.tipsService._currentusedTip.subscribe((result) =>{
      this.inEditMode = true;
    });
  }

  goCreateANewTip(){
    this.inEditMode = false;  
  }

  public submit(tipValue: HTMLInputElement): boolean {
    if(!this.checkIfFormInputIsValdid(tipValue)){
      return false;
    }
    if(this.inEditMode){
      this.tipsService.updateTip(tipValue.value);
      return true
    }
    this.tipsService.createTip(tipValue.value);
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
  
  public deleteTip(){    
    this.tipsService.deleteTip()
  }
}
