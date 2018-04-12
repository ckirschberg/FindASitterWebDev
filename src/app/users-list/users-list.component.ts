import { IAppState } from './../store/store';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { Baby } from '../entities/baby';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  ngOnDestroy(): void {
    // Always unsubscribe on destroy.
    this.subscription.unsubscribe();
  }
  private babies: Baby[];

  constructor(private data: DataService, 
    private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      console.log("babies in component", users.babies);
      this.babies = users.babies;
    });
    // this.babies = this.data.babies;
  }
  onUserClicked(baby) {
    console.log(baby);
  }
}
