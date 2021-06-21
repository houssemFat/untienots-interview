import { Component, OnInit } from '@angular/core';
import { AuthApiService } from "@app-core/services/api/auth.api.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  /**
   * Reactive form group
   */
  loginForm!: FormGroup;
  /**
   * Indicates if we are connecting to the server
   */
  isLoading = false;
  /**
   * Indicates if we are connecting to the server
   */
  error = "";

  constructor(private authApiService: AuthApiService) {
  }

  ngOnInit(): void {
    // init form
    this._initFormGroup();

  }

  private _initFormGroup() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      keepMeLoggedIn: new FormControl(),
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get keepMeLoggedIn() {
    return this.loginForm.get('keepMeLoggedIn');
  }


  onFormSubmit() {
    this.isLoading = true;
    this.error = "";
    this.authApiService.login({
      password: this.password?.value,
      email: this.email?.value,
      keep_me_logged_in: String(!!this.keepMeLoggedIn?.value),
    }).subscribe((res) => {
      if(!res){
        setTimeout(() => {
          this.error = "Something went wrong, please try again ."
        }, 2000)
      }
    }, (err) => {

    }, () => {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000)

    })
  }
}
