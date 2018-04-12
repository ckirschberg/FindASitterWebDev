import { UsersActions } from './users.actions';
import { UsersState } from './store/store';
import { tassign } from 'tassign';
import { Baby } from './entities/baby';
import { UsersService } from './users.service';

const INITIAL_STATE: UsersState = UsersService.getInitialUsersState();

export function usersReducer(state: UsersState = INITIAL_STATE, action:any) {
 
  switch (action.type) {
  
    case UsersActions.SET_TYPE: // action.payload: isBaby: boolean
      console.log("in the reducer", action.payload);
      
      // state.isBaby = action.payload;
      // return state;
      
      return tassign(state, { isBaby: action.payload });
   
    case UsersActions.CREATE_BABY: // action.payload is a baby object to add

      // add the baby to the array without changing the existing array.
      // The spread operator (...) will create a new array based on state.babies and add the object, action.payload
      // state.babies.push(action.payload);
      // return state;
      
      let newBabyArray = [...state.babies, action.payload];  
      // console.log(newBabyArray);
      return tassign(state, { babies: newBabyArray});
   
    case UsersActions.RATE_SITTER: // action.payload has .sittersUsername:string and .rating:number
      
      // find the sitter with the action.payload.sittersUsername
      // use spread operator to update the array.
      // 
      

      let index = state.sitters.findIndex(sitter => {return sitter.username === action.payload.sittersUsername});
      let newRatings = [...state.sitters[index].rating, action.payload.rating];
      console.log(newRatings);
      console.log(index);
      let newSitterObj = Object.assign({}, state.sitters[index]);
      newSitterObj.rating = newRatings;

      let newSitters = [...state.sitters.slice(0, index),
        newSitterObj,
        ...state.sitters.slice(index+1)];
      console.log(newSitters);
      return tassign(state, { sitters: newSitters});

      // return state


  default:
     return state;
 }
}
