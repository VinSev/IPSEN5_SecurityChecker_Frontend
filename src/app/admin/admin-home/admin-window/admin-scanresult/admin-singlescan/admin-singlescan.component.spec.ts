import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSinglescanComponent } from './admin-singlescan.component';

describe('AdminSinglescanComponent', () => {
  let component: AdminSinglescanComponent;
  let fixture: ComponentFixture<AdminSinglescanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSinglescanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSinglescanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
