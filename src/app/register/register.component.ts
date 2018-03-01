import { Component, OnInit } from '@angular/core';
import { Baby } from '../entities/baby';
import { Sitter } from '../entities/sitter';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private registerForm: FormGroup;
  
  constructor(private fb: FormBuilder, 
    private data: DataService, private router: Router) {
    
   }

   onSubmit(form) {
    let baby: Baby = form.value as Baby;
    this.data.addBaby(baby);
    this.router.navigate(['users-list']);
   }

  ngOnInit() {
    // You add the validators.
    this.registerForm = this.fb.group({
      username: [''],
      password: ['',],
      password2: ['',],
      firstname: ['',],
      lastname: ['',],
    });
  }

}
