import { UsersActions } from './../users.actions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  ratingForm;

  constructor(private fb: FormBuilder, private userActions: UsersActions) { }

  ngOnInit() {
    this.ratingForm = this.fb.group({
      rating: ['']
    });
  }

  onSubmit(form) {
    let rating = form.value.rating;
    let testUsername = 'test' // Should be sent to this component somehow...
    this.userActions.rateSitter(testUsername, rating);
  }

}
