import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminSingleScanComponent} from './admin-single-scan.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule} from "@angular/forms";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {HttpService} from "../../../../../shared/services/http.service";

describe('AdminSinglescanComponent', () => {
  let component: AdminSingleScanComponent;
  let fixture: ComponentFixture<AdminSingleScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSingleScanComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [{provide: ToastrService, useClass: ToastrModule}, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSingleScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
