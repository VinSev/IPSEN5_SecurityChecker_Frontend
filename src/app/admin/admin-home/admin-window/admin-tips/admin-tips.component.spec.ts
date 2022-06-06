import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTipsComponent } from './admin-tips.component';

describe('AdminTipsComponent', () => {
  let component: AdminTipsComponent;
  let fixture: ComponentFixture<AdminTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
