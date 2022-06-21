import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScanresultComponent } from './admin-scanresult.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule} from "@angular/forms";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {HttpService} from "../../../../shared/services/http.service";

describe('AdminScanresultComponent', () => {
  let component: AdminScanresultComponent;
  let fixture: ComponentFixture<AdminScanresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminScanresultComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [{provide: ToastrService, useClass: ToastrModule}, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminScanresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
