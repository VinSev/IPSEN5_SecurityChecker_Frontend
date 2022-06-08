import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tips } from 'src/app/shared/models/tips.model';
import { TipsService } from 'src/app/scan/tips/tips.service';

@Component({
  selector: 'app-admin-tip',
  templateUrl: './admin-tip.component.html',
  styleUrls: ['./admin-tip.component.scss']
})
export class AdminTipComponent implements OnInit {
  @Input() tip: Tips | any;

  constructor(public tipsService: TipsService) { }

  ngOnInit(): void {
    this.tipsService.setTipsIntoList()
  }

  onTipSelected(tip: Tips){    
    this.tipsService.changeCurrentUsedTip(tip);
  }
}
