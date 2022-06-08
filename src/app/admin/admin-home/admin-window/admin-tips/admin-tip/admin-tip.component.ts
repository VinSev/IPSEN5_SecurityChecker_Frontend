import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tips } from 'src/app/shared/models/tips.model';
import { TipsService } from 'src/app/scan/tips/tips.service';

@Component({
  selector: 'app-admin-tip',
  templateUrl: './admin-tip.component.html',
  styleUrls: ['./admin-tip.component.scss']
})
export class AdminTipComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  @Input() tip: Tips | any;
  tips: Tips[] = [];

  constructor(private tipsService: TipsService) { }

  ngOnInit(): void {
    this.subscription = this.tipsService.getAll()
    .subscribe(response => {      
      this.tips = response;                    
    });
  }

  onTipSelected(tip: Tips){
    this.tipsService.changeCurrentUsedTip(tip);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
