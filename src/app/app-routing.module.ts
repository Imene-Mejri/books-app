

import { SignupComponent} from'./components/Authentification/signup/signup.component';
import { SigninComponent} from'./signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path : '',  redirectTo :'signin', pathMatch: 'full'},
{path:'signin',component: SigninComponent},
{path:'signup',component: SignupComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
