import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListModule } from './user-list/user-list.module';
// import { UserListComponent } from './user-list/user-list.component';
import {UsersModule} from './users/users.module';
@NgModule({
  declarations: [
    AppComponent,
    // UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    UserListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
