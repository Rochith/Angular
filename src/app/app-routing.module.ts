import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillPaymentsComponent } from './bill-payments/bill-payments.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LogoutAdminComponent } from './logout-admin/logout-admin.component';
import { LogoutUserComponent } from './logout-user/logout-user.component';
import { RegisterComponent } from './register/register.component';
import { RemittanceManagementComponent } from './remittance-management/remittance-management.component';
import { ReoccuringDepositComponent } from './reoccuring-deposit/reoccuring-deposit.component';
import { SavingsAccountComponent } from './savings-account/savings-account.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
  {path:'savings-account',component:SavingsAccountComponent,canActivate:[AuthGuardService]},
   {path:'fixed-deposit',component:FixedDepositComponent,canActivate:[AuthGuardService]},
   {path:'bill-payments',component:BillPaymentsComponent},
  {path:'register',component:RegisterComponent},
  // {path:'remittance-management',component:RemittanceManagementComponent},
   {path:'login-user',component:LoginUserComponent},
  // {path:'login-admin'},
   {path:'logout-user',component:LogoutUserComponent,canActivate:[AuthGuardService]},
  // {path:'logout-admin',component:LogoutAdminComponent},
   {path:'reoccuring-deposit',component:ReoccuringDepositComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
