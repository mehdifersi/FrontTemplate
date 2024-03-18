import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountServiceComponent } from './bank-account-service.component';

describe('BankAccountServiceComponent', () => {
  let component: BankAccountServiceComponent;
  let fixture: ComponentFixture<BankAccountServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankAccountServiceComponent]
    });
    fixture = TestBed.createComponent(BankAccountServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
