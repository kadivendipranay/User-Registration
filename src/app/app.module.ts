import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRegistrationComponent } from './component/list-registration/list-registration.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { AddRegistrationComponent } from './component/add-registration/add-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRegistrationComponent,
    NavBarComponent,
    AddRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
