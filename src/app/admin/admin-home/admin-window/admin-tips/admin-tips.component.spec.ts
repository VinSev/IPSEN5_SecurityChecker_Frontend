import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTipsComponent } from './admin-tips.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {FormsModule} from "@angular/forms";

describe('AdminTipsComponent', () => {
  let component: AdminTipsComponent;
  let fixture: ComponentFixture<AdminTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTipsComponent ],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [{provide: ToastrService, useClass: ToastrModule}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
