import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipsService } from 'src/app/scan/tips/tips.service';
import { Tips } from 'src/app/shared/models/tips.model';

import { AdminTipComponent } from './admin-tip.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";

describe('AdminTipComponent', () => {
  let component: AdminTipComponent;
  let service: TipsService;
  let fixture: ComponentFixture<AdminTipComponent>;

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
    service = TestBed.inject(TipsService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change current tip', function () {
    component.onTipSelected(new Tips('hello world'));
    expect(service.tipToSendWithId.text).toEqual('hello world');
  });

});
