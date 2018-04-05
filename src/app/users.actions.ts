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
