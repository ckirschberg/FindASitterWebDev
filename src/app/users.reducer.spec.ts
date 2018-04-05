import { UsersState } from './store/store';
var deepFreeze = require('deep-freeze');
import { usersReducer } from './users.reducer';
import * as types from './users.actions';
import { initServicesIfNeeded } from '@angular/core/src/view';
import { UsersService } from './users.service';

describe('register reducer', () => {

	it('should return the initial state', () => {
		expect(usersReducer(undefined, {})).toEqual(UsersService.getInitialUsersState());
  });

  it('Toggle isBaby or sitter', () => {
    let state =  UsersService.getInitialUsersState();
    deepFreeze(state);
    let newState = UsersService.getInitialUsersState();
    newState.isBaby = true;

    expect(
      usersReducer(state, {
      type: types.UsersActions.SET_TYPE,
      payload: true 
		})).toEqual(newState);
  });
  it('Should add a new baby object to the babies array', () => {
    // create 'mock' of initial state
    // add baby by calling reducer function
    // check that state is correct. Use deep freeze to check no mutations.
    let initialState = UsersService.getInitialUsersState();
    deepFreeze(initialState);
    let afterState = UsersService.getInitialUsersState();
    let baby = { 
      username: 'test baby 1', 
      firstname: 'Peter', 
      lastname: 'Petursson', 
      birthDate: new Date(2018,0,1), 
      area: 'Copenhagen', 
      rating: [] 
    };
    afterState.babies.push(baby);

    let newState = usersReducer(initialState, {
      type: types.UsersActions.CREATE_BABY,
      payload: baby
    });

    expect(newState.babies.length).toEqual(1);
    expect(newState).toEqual(afterState);
  });


});