import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTipsComponent } from './admin-tips.component';

describe('AdminTipsComponent', () => {
  let component: AdminTipsComponent;
  let fixture: ComponentFixture<AdminTipsComponent>;
  let adminTips: AdminTipsComponent;

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

  it('should change value of inEditMode', () =>{
    adminTips.goCreateANewTip();
    expect(adminTips.inEditMode).toBeFalse;
  })

  it('should return true after input is checked', () =>{
    let tip: HTMLInputElement = document.createElement('input') as HTMLInputElement
    expect(adminTips.checkIfFormInputIsValdid(tip)).toBeTrue;
  })
});
