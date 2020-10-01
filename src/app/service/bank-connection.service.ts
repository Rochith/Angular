import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Balance } from './balance';
import { BillPayments } from './billpayments';
import { Fixed } from './fixeddeposite';
import { Register } from './register';
import { RemittanceManagement } from './remittance';
import { ReoccuringAccount } from './reoccuringaccount';
import { Transfer } from './transfer';
import { WithDraw } from './withdraw';

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
    console.log(reoccuring);
  }
  addRemittanceManagement(remittance:RemittanceManagement){
    this.http.post<RemittanceManagement>(this.url+"/remiadd",remittance)
    .subscribe(remittance=>alert("Account/card deatils Added Successfully" + remittance.cardNo));
  }
  getAllMiniStatements():Observable<any>{
    return this.http.get(this.url+"/getmini");
  }
  addBillPayments(billpayments:BillPayments){
    this.http.post<BillPayments>(this.url+"/bill",billpayments)
    .subscribe(billpayments=>alert("Payments Successful"+billpayments.billNumber));
  }
  addAdmin(admin:Admin){
    this.http.post<Admin>(this.url+"/deposit",admin)
    .subscribe(admin=>alert("Added successfully"+admin.accountNumber));
  }
  addAmount(withdraw:WithDraw){
    this.http.post<WithDraw>(this.url+"/withdraw",withdraw)
    .subscribe(withdraw=>alert("Money WithDraw"+withdraw.withdrawAmount));
  }
  addTransfer(transfer:Transfer){
    this.http.post<Transfer>(this.url+"/transfer",transfer)
    .subscribe(transfer=>alert("Amount Transfered to "+transfer.tarnsferAccount));
    console.log(transfer);
  }
  getBalance():Observable<any>{
    return this.http.get(this.url+"/balance");
  }
}
