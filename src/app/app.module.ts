import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
import { RegisterActions } from './register/register.actions';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { IAppState } from './store/store';
import { rootReducer } from './store/store';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,MatSelectModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot()
  ],
  providers: [AuthGuardService, AuthService, DataService, RegisterActions ],
  
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,) {
    
    this.ngRedux.configureStore(rootReducer, {});

      ngReduxRouter.initialize(/* args */);    
  }
}
