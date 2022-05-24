import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanComponent } from './scan.component';
import {Scan} from "../../shared/models/scan.model";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ScanRoutingModule} from "../scan-routing.module";
import {ToastrModule} from "ngx-toastr";

describe('ScanComponent', () => {
  let component: ScanComponent;
  let scan: Scan;
  let fixture: ComponentFixture<ScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanRoutingModule, HttpClientTestingModule,ToastrModule],
      declarations: [ ScanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanComponent);
    component = fixture.componentInstance;
    scan = component.userScan;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start a request for scans',() =>{
    expect(scan).toBeInstanceOf(Scan)
  })
});
