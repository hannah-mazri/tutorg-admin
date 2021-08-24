import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '@app/_components/shared.module';

describe('LoginComponentFunctionalTestCases', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedModule, FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Checks if user is already logged in and redirect to home page', () => {
    //  check local storage, assert
  });

  it('Initial form values for login form group should be empty', () => {
    const loginFormGroup = component.loginForm;
    const loginFormValues = {
      username: '',
      password: '',
    };

    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

  it('username value before entering some value and validation', () => {
    const loginFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#loginForm').querySelectorAll('input')[0];
    const usernameValueFromGroup = component.loginForm.get('username');

    expect(loginFormUserElement.value).toEqual(usernameValueFromGroup?.value);
    expect(usernameValueFromGroup?.errors).not.toBeNull();
    expect(usernameValueFromGroup?.errors?.required).toBeTruthy();
  });

  // FUNCTIONAL TEST CASES
  /* I use fixture.detectChanges() because cannot find elements inside *ngIf */
  it('Display error message when username input is blank', () => {
    const submitButtonElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#loginForm').querySelector('button');

    submitButtonElement.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const usernameRequiredErrorMessage: HTMLInputElement = fixture.debugElement.nativeElement
        .querySelector('.invalid #username-feedback').innerHTML;
      // @ts-ignore
      expect(usernameRequiredErrorMessage).toEqual('Username is required');
    });
  });

  it('Display error message when password input is blank', () => {
    const submitButtonElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#loginForm').querySelector('button');

    submitButtonElement.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const passwordRequiredErrorMessage: HTMLInputElement = fixture.debugElement.nativeElement
        .querySelector('.invalid #password-feedback').innerHTML;
      // @ts-ignore
      expect(passwordRequiredErrorMessage).toEqual('Password is required');
    });
  });

  it('Display error popup fills in incorrect credentials and clicks login button', () => {
    const usernameInputElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#loginForm').querySelector('#username');
    const passwordInputElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#loginForm').querySelector('#password');

    usernameInputElement.value = 'hnajwa';
    passwordInputElement.value = 'root 123';

    usernameInputElement.dispatchEvent(new Event('input'));

    //  submit
    //  call function login, return true
    //  expect isLoggedIn = true
    component.onSubmit();

    // macam mana nak verify yang user dah login?
    expect(component.loggedIn).toBeFalsy();
  });

  it('Redirects to home page when user fills in correct credentials and clicks login button', () => {
    const usernameInputElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#loginForm').querySelector('#username');
    const passwordInputElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#loginForm').querySelector('#password');

    usernameInputElement.value = 'hnajwa';
    passwordInputElement.value = 'root123';

    usernameInputElement.dispatchEvent(new Event('input'));
    passwordInputElement.dispatchEvent(new Event('input'));

    //  submit
    //  call function login, return true
    //  expect isLoggedIn = true
    component.onSubmit();

    expect(component.loggedIn).toBeFalsy();
  });
});
