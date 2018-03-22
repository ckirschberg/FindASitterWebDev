import { RegisterActions } from './register.actions';
import { Component, OnInit } from '@angular/core';
import { Baby } from '../entities/baby';
import { Sitter } from '../entities/sitter';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private registerForm: FormGroup;
  private isBaby: boolean;
  
  
  constructor(private fb: FormBuilder, 
    private data: DataService, private router: Router,
    private registerActions: RegisterActions, private ngRedux: NgRedux<IAppState>) {
    
   }

  onSubmit(form) {
    let baby: Baby = form.value as Baby;
    this.data.addBaby(baby);
    this.router.navigate(['users-list']);
  }

  ngOnInit() {
    this.ngRedux.select(state => state.register).subscribe(res => {
      console.log("res", res);
      this.isBaby = res.isBaby;
    });

    this.registerForm = this.fb.group({
      username: [''],
      password: ['',],
      password2: ['',],
      firstname: ['',],
      lastname: ['',],
    });
  }
}
