import { Component, OnInit } from '@angular/core';
import { Tips } from 'src/app/shared/models/tips.model';
import { TipsService } from 'src/app/scan/tips/tips.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-admin-tips',
  templateUrl: './admin-tips.component.html',
  styleUrls: ['./admin-tips.component.scss']
})
export class AdminTipsComponent implements OnInit {
  tips: Tips[] = [];

  constructor(public tipsService: TipsService) { }

  ngOnInit(): void {
  }

  goCreateANewTip(){
    this.tipsService.cleanInputField()
  }

  public submit(tipValue: HTMLInputElement): boolean {
    if(!this.checkIfFormInputIsValdid(tipValue)){
      return false;
    }
    if(this.tipsService.inEditMode){
      this.tipsService.updateTip(tipValue.value);
      return true
    }
    this.tipsService.createTip(tipValue.value);
    tipValue.value = "";
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
