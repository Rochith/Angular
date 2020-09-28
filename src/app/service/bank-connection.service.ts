import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fixed } from './fixeddeposite';
import { Register } from './register';
import { RemittanceManagement } from './remittance';
import { ReoccuringAccount } from './reoccuringaccount';

@Injectable({
  providedIn: 'root'
})
export class BankConnectionService {

  url:string="http://localhost:9999/Bank";

  constructor(private http:HttpClient) { }

  addRegister(register:Register){
    this.http.post<Register>(this.url+"/add",register)
    .subscribe(register=>alert("Successfully Registered"+register.userId));
  }
  addFixedDeposit(fixed:Fixed){
    this.http.post<Fixed>(this.url+"/fdadd",fixed)
    .subscribe(fixed=>alert("Your Fixed Deposit Account is successfully" + fixed.fixedDepositId)); 
  }
  addReoccuringAccount(reoccuring:ReoccuringAccount){
    this.http.post<ReoccuringAccount>(this.url+"/rdadd",reoccuring)
    .subscribe(reoccuring=>alert("Your Reoccuring Account is successfully" + reoccuring.reoccuringAccountId));
  }
  addRemittanceManagement(remittance:RemittanceManagement){
    this.http.post<RemittanceManagement>(this.url+"/remiadd",remittance)
    .subscribe(remittance=>alert("Account/card deatils Added Successfully" + remittance.cardNo));
  }
}
