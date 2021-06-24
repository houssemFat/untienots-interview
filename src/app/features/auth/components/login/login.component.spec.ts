import { fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";

// app modules
import { AuthApiService } from "@app-core/services/api/auth.api.service";
import { CoreModule } from "@app-core/core.module";
import { AuthModule } from "../../auth.module";
import { LoginComponent } from "./login.component";
import { AuthRoutingModule } from "../../auth.routing.module";


// Prepare component and global dom
// Set it "global" locally in this file so we can access to
// component and
let fixture: any;
let component: LoginComponent;
let router: Router;
// elements
let debugElement: any;
let submitButton: any;
// form group controls
let emailFormControl: any;
let passwordFormGroupControl: any;

// set up
let setup = () => {
  // Prepare dependencies
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthModule, CommonModule, ReactiveFormsModule, CoreModule,
        AuthRoutingModule,
        RouterTestingModule],
      declarations: [LoginComponent],
      providers: [AuthApiService]
    }).compileComponents();
  });
  beforeEach(() => {
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement
    router.initialNavigation();
  });

// get form controls and button element
  beforeEach(() => {
    submitButton = debugElement.nativeElement.querySelector('button');
    emailFormControl = component.loginForm.controls['email'];
    passwordFormGroupControl = component.loginForm.controls['password'];
  });

};
/**
 * Fill form control values.
 * By default, all values are valid
 * @param email
 * @param password
 */
let fillFormValues = (email = 'email@val.id', password = 'abCdE1#1') => {
  // invalid
  emailFormControl.setValue(email);
  passwordFormGroupControl.setValue(password);
}
// TODO
describe('LoginComponent >> Inputs and forms', () => {
  setup();

  // main component
  it('should create the login form', () => {
    expect(component).toBeTruthy();
  });
  // main component
  it('Submit button should be disabled if the form is invalid', () => {
    expect(submitButton.disabled).toBeTruthy();
  });

  // main component
  it('should verify invalid form group', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('Should verify email', () => {
    // invalid
    emailFormControl.setValue('invalid email');
    fixture.detectChanges();
    // message error is shown
    expect(emailFormControl.valid).toBeFalsy();
    expect(component.loginForm.valid).toBeFalsy();
    expect(submitButton.disabled).toBeTruthy();
    emailFormControl.setValue('email@val.id');
    expect(emailFormControl.valid).toBeTruthy();
  })

  it('Should verify password', () => {
    // invalid
    passwordFormGroupControl.setValue('invalid email');
    fixture.detectChanges();
    // message error is shown
    expect(passwordFormGroupControl.valid).toBeFalsy();
    expect(component.loginForm.valid).toBeFalsy();
    passwordFormGroupControl.setValue('abCdE1#1');
    expect(passwordFormGroupControl.valid).toBeTruthy();
    passwordFormGroupControl.setValue('129838');
    expect(passwordFormGroupControl.valid).toBeFalsy();
  })
});


// TODO
describe('LoginComponent >> Submit and error', () => {
  setup();

  it('Should remove disabled from display', () => {
    fillFormValues();
    fixture.detectChanges();
    expect(submitButton.disabled).toBeFalsy();
  });

  it('Should not call method when the form is invalid', () => {
    spyOn(component, 'onFormSubmit');
    fillFormValues('not-a-valid-mail');
    fixture.detectChanges();
    submitButton.click();
    expect(component.onFormSubmit).not.toHaveBeenCalled();
  });
  //
  it('Should  call method  with a valid form', () => {
    spyOn(component, 'onFormSubmit');
    fillFormValues();
    fixture.detectChanges();
    submitButton.click();
    expect(component.onFormSubmit).toHaveBeenCalled();
  });
  //
  it('Should  display error when credentials are wrong', (done) => {
    spyOn(component, 'onFormSubmit');
    fillFormValues();
    fixture.detectChanges();
    submitButton.click();
    // test callback error
    setTimeout(() => {
      expect(router.url).toEqual('/');
      fixture.detectChanges();
      done();
    }, 2000);
  });

});

describe('LoginComponent >> Submit with success', () => {
  afterAll(() => {
    setup();
    it('Should validateform are wrong', (done) => {
      spyOn(component, 'onFormSubmit');
      fillFormValues('', '');
      fillFormValues("user@untienots.com");
      fixture.detectChanges();
      submitButton.click();
      // test callback error
      console.log(router.url);
      setTimeout(() => {
        expect(router.url).toEqual('/home');
        done();
      }, 2000);
    });
  });
});
