import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store/store';
import { Baby } from './entities/baby';

@Injectable()
export class UsersActions {
 
  constructor (
   private ngRedux: NgRedux<IAppState>) {}
   
   // Available actions
   static SET_TYPE: string = 'SET_TYPE';
   static CREATE_BABY: string = 'CREATE_BABY';
   static RATE_SITTER: string = 'RATE_SITTER';
   static GET_USERS: string = 'GET_USERS';
   static RECEIVED_USERS: string = 'RECEIVED_USERS';
   static FAILED_RECEIVED_USERS: string = 'FAILED_RECEIVED_USERS';

  getUsers() {
    this.ngRedux.dispatch({
      type: UsersActions.GET_USERS
    })
  }

  rateSitter(sittersUsername: string, rating: number): void {
    this.ngRedux.dispatch({
      type: UsersActions.RATE_SITTER,
      payload: {rating, sittersUsername}
    });
  }

   createBaby(baby: Baby) : void {
    console.log(baby);

    this.ngRedux.dispatch({
      type: UsersActions.CREATE_BABY,
      payload: baby
    }); 
   }
   

   setType(isBaby: boolean): void {
    console.log("in action ", isBaby);
    
    this.ngRedux.dispatch({
       type: UsersActions.SET_TYPE,
       payload: isBaby
     });
     
   }
}
