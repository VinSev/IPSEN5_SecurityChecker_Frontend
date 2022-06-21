import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanComponent } from './scan.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { ToastrModule, ToastrService} from "ngx-toastr";
import {ScanService} from "./scan.service";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";

describe('ScanComponent', () => {
  let component: ScanComponent;
  let fixture: ComponentFixture<ScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanComponent ],
      imports: [ HttpClientTestingModule, FormsModule, RouterTestingModule],
      providers: [ ScanService, {provide: ToastrService, useClass: ToastrModule} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanComponent);
    component = fixture.componentInstance;
    component.scanService.report.scanReports[0].result;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false if mail is empty', () => {
    let inputElement: HTMLInputElement = document.createElement('input') as HTMLInputElement
    inputElement.required = true;
    expect(component.submit(inputElement)).toBeFalse();
  });

  it('should return true if mail is filled', () => {
    let inputElement: HTMLInputElement = document.createElement('input') as HTMLInputElement
    inputElement.value = "hello@gmail.com";
    expect(component.submit(inputElement)).toBeTrue();
  });

  it('should start scan', () => {
    component.ngOnInit();
    expect(component.scanService.report.scanReports[0].loading).toBeTrue();
  });
});
