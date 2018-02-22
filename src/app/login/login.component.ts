import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Baby } from '../entities/baby';
import { Router } from '@angular/router';
import { PasswordValidator } from '../PasswordValidator';
import { AuthService } from '../auth.service';
// import { PasswordValidator } from '../PasswordValidator';

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

  constructor(private fb: FormBuilder, private router: Router, 
    private authService: AuthService) {
  }

   onSubmit(loginForm) {
    console.log("is Valid?: " + loginForm.valid);

    if (loginForm.valid) {
      // Send an http request to login
      
      // Navigate to the home page (or some other page)
      this.authService.login().subscribe(x => {
        this.router.navigate(['contact']);
      });
      
    } else {
      // Display error messages.
    }
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', 
      Validators.compose([
        Validators.required,
        PasswordValidator.getPasswordValidator()
       ]
      )]
    });
  }

}
