import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipsService } from 'src/app/scan/tips/tips.service';
import { Tips } from 'src/app/shared/models/tips.model';

import { AdminTipComponent } from './admin-tip.component';

describe('AdminTipComponent', () => {
  let component: AdminTipComponent;
  let fixture: ComponentFixture<AdminTipComponent>;
  let adminTip: AdminTipComponent;
  let tipService: TipsService;
  let tip : Tips;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change current used tip', () => {
    tip.text = ("new tip Created for this Test!")
    adminTip.onTipSelected(tip)
    expect(tipService.tipToSendWithId.text).toEqual("new tip Created for this Test!");
    expect(tipService._isThereACurrentTip).toBeFalse;
  });
});
