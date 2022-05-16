import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanComponent } from './scan.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {InjectionToken} from "@angular/core";
import {TOAST_CONFIG, ToastContainerModule, ToastrModule, ToastrService} from "ngx-toastr";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {ScanService} from "./scan.service";
import {ScanModule} from "../scan.module";
import {FormsModule} from "@angular/forms";

describe('ScanComponent', () => {
  let component: ScanComponent;
  let fixture: ComponentFixture<ScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanComponent ],
      imports: [ HttpClientTestingModule, FormsModule],
      providers: [ ScanService, {provide: ToastrService, useClass: ToastrModule} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false if mail is empty', () => {
    expect(component.submit(document.createElement('input') as HTMLInputElement)).toBeFalse();
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
});
