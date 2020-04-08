import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './products/index/index.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products/products.service';
import { AddComponent } from './products/add/add.component';
import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './login/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddComponent  ,
    LoginComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ProductsService,LoginService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
