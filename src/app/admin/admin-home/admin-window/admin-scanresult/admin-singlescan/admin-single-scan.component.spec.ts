import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSingleScanComponent } from './admin-single-scan.component';

describe('AdminSinglescanComponent', () => {
  let component: AdminSingleScanComponent;
  let fixture: ComponentFixture<AdminSingleScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSingleScanComponent ]
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
