import { IAppState } from './../store/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Baby } from '../entities/baby';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  subscription;

  ngOnDestroy(): void {
    // Always unsubscribe on destroy.
    this.subscription.unsubcribe();
  }
  private babies: Baby[];

  constructor(private data: DataService, 
    private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      console.log(users.babies);
      this.babies = users.babies;
    });
    // this.babies = this.data.babies;
  }
  onUserClicked(baby) {
    console.log(baby);
  }
}
