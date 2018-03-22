import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { registerReducer } from './../register/register.reducer';

export class RegisterState {
 isBaby: boolean;
}
export class IAppState {
 register?: RegisterState;
}

export const rootReducer = combineReducers<IAppState>({
 register: registerReducer,
 // when you add more reducers, add them here..

 router: routerReducer
});
