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
import {JSONFile} from "@angular/cli/utilities/json-file";

describe('ScanComponent', () => {
  let component: ScanComponent;
  let toastr: ToastrService;
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
