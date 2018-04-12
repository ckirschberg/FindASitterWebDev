import { UsersService } from './users.service';
import { UsersActions } from './users.actions';
import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersEpic {

  constructor(private usersService: UsersService) {}
  
  getUsers = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.GET_USERS) // Listen for this action
      .mergeMap(({payload}) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
          return this.usersService.getSitters()
            .map((result: any[]) => ({ // when web service responds with success, call this action with payload that came back from webservice
              type: UsersActions.RECEIVED_USERS,
              payload: result.filter(x => x.customerId === '3') // Hack: Db contains all data, not just yours.
            }))
            .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
              type: UsersActions.FAILED_RECEIVED_USERS,
              payload: error
          }));
    });
  }
}