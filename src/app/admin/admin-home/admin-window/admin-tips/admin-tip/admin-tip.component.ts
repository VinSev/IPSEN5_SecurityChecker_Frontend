import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tips } from 'src/app/shared/models/tips.model';
import { TipsService } from 'src/app/scan/tips/tips.service';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-admin-tip',
  templateUrl: './admin-tip.component.html',
  styleUrls: ['./admin-tip.component.scss']
})
export class AdminTipComponent implements OnInit {
  private subscription!: Subscription;

  @Input() tip: Tips | any;
  tips: Tips[] = [];

  constructor(private router: Router,
              private tipsService: TipsService,
              private adminService: AdminService) { }

  ngOnInit(): void {
    this.subscription = this.tipsService.getAll()
    .subscribe(response => {      
      this.tips = response;                    
    });
  }

  onTipSelected(tip: Tips){
    this.tipsService.changeCurrentUsedTip(tip);
  }

}
