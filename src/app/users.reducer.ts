import { UsersActions } from './users.actions';
import { UsersState } from './store/store';
import { tassign } from 'tassign';

const INITIAL_STATE: UsersState = { isBaby: undefined, babies: [], sitters: [] };

export function usersReducer(state: UsersState = INITIAL_STATE, action:any) {
 
  switch (action.type) {
  
    case UsersActions.SET_TYPE: // action.payload: isBaby: boolean
      console.log("in the reducer", action.payload);
      
      // state.isBaby = action.payload;
      // return state;
      
      return tassign(state, { isBaby: action.payload });
   
   
  default:
     return state;
 }
}
