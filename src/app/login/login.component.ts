import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  // loginForm = new FormGroup ({
  //   username: new FormControl(),
  //   password: new FormControl()
  // });

  constructor(private fb: FormBuilder) {}

   onSubmit(loginForm) {
    console.log(loginForm.value)

    if (loginForm.valid) {
      // Send an http request to login
    } else {
      // Display error messages.
    }

   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
