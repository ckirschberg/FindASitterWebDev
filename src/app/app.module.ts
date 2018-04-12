import { UsersService } from './users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { rootReducer } from './store/store'; // Added this to get the root reducer

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';  // <-- #1 import module
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { RegistrationComponent } from './registration/registration.component';
import { UsersListComponent } from './users-list/users-list.component';
import { BabyDetailsComponent } from './baby-details/baby-details.component';
import { UserComponent } from './user/user.component';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './store/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { UsersActions } from './users.actions';
import { RatingComponent } from './rating/rating.component';
import { HttpClientModule } from '@angular/common/http';

import { createEpicMiddleware, combineEpics } from "redux-observable";
import { UsersEpic } from './users.epic';
import { createLogger } from 'redux-logger';
// const createLogger = require('redux-logger');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    UsersListComponent,
    BabyDetailsComponent,
    UserComponent,
    RatingComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,MatSelectModule,
    NgReduxModule, NgReduxRouterModule.forRoot()
  ],
  providers: [AuthGuardService, AuthService, DataService, UsersActions, UsersService, UsersEpic],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter, private usersEpic: UsersEpic) {
      
      // From app.module.ts - constructor
      const rootEpic = combineEpics(
        this.usersEpic.getUsers, 
    // Each epic is referenced here.
      );
    // Middleware
      // http://redux.js.org/docs/advanced/Middleware.html
      // https://github.com/angular-redux/store/blob/master/articles/epics.md
      // const epicMiddleware = createEpicMiddleware(rootEpic);
      const middleware = [
        createEpicMiddleware(rootEpic), createLogger({ level: 'info', collapsed: true })
      ];
      this.ngRedux.configureStore(
        rootReducer,
        {}, middleware, [ devTool.isEnabled() ? devTool.enhancer() : f => f]);
    
   
      // this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);
 
      ngReduxRouter.initialize(/* args */);   
  }
 }
