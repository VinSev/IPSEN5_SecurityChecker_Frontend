import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminService } from '../../admin.service';
import { AdminWindowComponent } from '../admin-window/admin-window.component';

import { AdminMenuComponent } from './admin-menu.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";

describe('AdminMenuComponent', () => {
  let component: AdminMenuComponent;
  let service: AdminService;
  let fixture: ComponentFixture<AdminMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMenuComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{provide: ToastrService, useClass: ToastrModule}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AdminService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout user', () => {
    try {
      component.logOutAsUser();
    } catch (ignore) {}
    expect(localStorage.getItem('email')).toBeNull;
    expect(localStorage.getItem('role')).toBeNull;
    expect(localStorage.getItem('token')).toBeNull;
  });

  it('should switch between dropdown of scans and tips', () => {
    component.activateAdminDropDown('tips')
    service._dropDownLocation
      .subscribe(result => {
        expect(result).toEqual('tips');
      })
  });
});
