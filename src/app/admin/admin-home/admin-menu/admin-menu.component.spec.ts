import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminService } from '../../admin.service';
import { AdminWindowComponent } from '../admin-window/admin-window.component';

import { AdminMenuComponent } from './admin-menu.component';

describe('AdminMenuComponent', () => {
  let component: AdminMenuComponent;
  let fixture: ComponentFixture<AdminMenuComponent>;
  let adminMenu: AdminMenuComponent;
  let adminWindow: AdminWindowComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should destroy 3 localstorages of a token, email, role`, () => {
    adminMenu.logOutAsUser()
    expect(localStorage.getItem('email')).toBeNull;
    expect(localStorage.getItem('role')).toBeNull;
    expect(localStorage.getItem('token')).toBeNull;
});


it(`should switch between dropdown of scans and tips`, () => {
  adminMenu.activateAdminDropDown('tips')
  expect(adminWindow.currentDropDownStatus).toEqual('tips');
  adminMenu.activateAdminDropDown('scans')
  expect(adminWindow.currentDropDownStatus).toEqual('scans');
});
});
