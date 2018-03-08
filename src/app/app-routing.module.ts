import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { UsersListComponent } from './users-list/users-list.component';
import { BabyDetailsComponent } from './baby-details/baby-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, 
  //children: [
    //{...},
    //{...}
//  ] 
},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuardService] },
  { path: 'users-list', component: UsersListComponent },
  { path: 'baby-details/:id', component: BabyDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
