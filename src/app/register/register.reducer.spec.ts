var deepFreeze = require('deep-freeze');
import { registerReducer } from './register.reducer';
import * as types from './register.actions';

describe('register reducer', () => {

	it('should return the initial state', () => {
		expect(registerReducer(undefined, {})).toEqual({isBaby: undefined});
  });

  it('Toggle isBaby or sitter', () => {
    let state = {isBaby: undefined};
    deepFreeze(state);

    expect(
      registerReducer(state, {
      type: types.RegisterActions.SET_TYPE,
      payload: true 
		})).toEqual({isBaby: true});
  });
});