import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipsService } from 'src/app/scan/tips/tips.service';
import { Tips } from 'src/app/shared/models/tips.model';

import { AdminTipComponent } from './admin-tip.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";

describe('AdminTipComponent', () => {
  let component: AdminTipComponent;
  let fixture: ComponentFixture<AdminTipComponent>;
  let adminTip: AdminTipComponent;
  let tipService: TipsService;
  let tip : Tips;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTipComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: ToastrService, useClass: ToastrModule}]
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

});
