import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddRegistrationComponent } from './component/add-registration/add-registration.component';
import { ListRegistrationComponent } from './component/list-registration/list-registration.component';

const routes: Routes = [
  {path: '', component:AddRegistrationComponent},
  {path: 'registration', component:AddRegistrationComponent},
  {path :'list-registrations', component:ListRegistrationComponent}              

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
