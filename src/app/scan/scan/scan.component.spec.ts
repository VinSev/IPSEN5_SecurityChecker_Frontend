import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanComponent } from './scan.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {InjectionToken} from "@angular/core";
import {TOAST_CONFIG, ToastContainerModule, ToastrModule, ToastrService} from "ngx-toastr";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {ScanService} from "./scan.service";
import {ScanModule} from "../scan.module";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {Scan} from "../../shared/models/scan.model";
import {ScanRoutingModule} from "../scan-routing.module";

describe('ScanComponent', () => {
  let component: ScanComponent;
  let toastr: ToastrService;
  let scan: Scan;
  let fixture: ComponentFixture<ScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanComponent ],
      imports: [ScanRoutingModule, HttpClientTestingModule, FormsModule, RouterTestingModule],
      providers: [ ScanService, {provide: ToastrService, useClass: ToastrModule} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanComponent);
    component = fixture.componentInstance;
    component.scanService.scanCategories[0].result = {};
    scan = component.userScan;
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
    expect(component.scanService.scanCategories[0].loading).toBeTrue();
  });

  it('should start a request for scans',() =>{
    expect(scan).toBeInstanceOf(Scan)
  })
});
