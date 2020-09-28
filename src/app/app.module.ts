import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';
import {FormsModule}  from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LogoutUserComponent } from './logout-user/logout-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LogoutAdminComponent } from './logout-admin/logout-admin.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SavingsAccountComponent } from './savings-account/savings-account.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { ReoccuringDepositComponent } from './reoccuring-deposit/reoccuring-deposit.component';
import { BillPaymentsComponent } from './bill-payments/bill-payments.component';
import { RemittanceManagementComponent } from './remittance-management/remittance-management.component';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuardService } from './service/auth-guard.service';
import { BankComponent } from './bank/bank.component';

@NgModule({
  declarations: [
    // AppComponent,
    LoginUserComponent,
     LogoutUserComponent,
    // LoginAdminComponent,
    // LogoutAdminComponent,
    RegisterComponent,
    HomeComponent,
    BankComponent,
    SavingsAccountComponent,
    FixedDepositComponent,
    ReoccuringDepositComponent
    // BillPaymentsComponent,
    // RemittanceManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService,AuthGuardService],
  bootstrap: [BankComponent],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
