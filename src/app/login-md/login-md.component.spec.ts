import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMdComponent } from './login-md.component';

describe('LoginMdComponent', () => {
  let component: LoginMdComponent;
  let fixture: ComponentFixture<LoginMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
