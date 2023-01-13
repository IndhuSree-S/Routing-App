import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMdDetailsComponent } from './login-md-details.component';

describe('LoginMdDetailsComponent', () => {
  let component: LoginMdDetailsComponent;
  let fixture: ComponentFixture<LoginMdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMdDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
