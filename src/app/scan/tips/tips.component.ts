import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {TipsService} from "./tips.service";
import {Tips} from "../../shared/models/tips.model";

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  public funFacts: Tips[] = [];

  constructor(private tipsService: TipsService) { }

  public ngOnInit(): void {
    this.subscription = this.tipsService.getAll()
      .subscribe(response => {
        this.funFacts = response;
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
