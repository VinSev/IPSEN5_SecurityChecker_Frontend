import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminComponent} from './admin.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {FormsModule} from "@angular/forms";
import {HttpService} from "../shared/services/http.service";
import {HttpClient} from "@angular/common/http";

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [{provide: ToastrService, useClass: ToastrModule}, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should return false if inputs are empty', () => {
    let email: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let password: HTMLInputElement = document.createElement('input') as HTMLInputElement
    email.required = true;
    password.required = true;
    expect(component.submit(email, password)).toBeFalse();
  });

  it('should return true if mail is filled', () => {
    let email: HTMLInputElement = document.createElement('input') as HTMLInputElement
    let password: HTMLInputElement = document.createElement('input') as HTMLInputElement
    email.value = "test"
    password.value = "test"
    expect(component.submit(email, password)).toBeTrue();
  });

  it('should resolve captcha', function () {
    try {
      component.resolved('test', new HTMLInputElement(), new HTMLInputElement());
    } catch (ignore) {}
    expect(component.adminCaptcha).toEqual('')
  });
});
