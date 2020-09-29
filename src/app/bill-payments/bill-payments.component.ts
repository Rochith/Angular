import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { BankConnectionService } from '../service/bank-connection.service';
import { BillPayments } from '../service/billpayments';

@Component({
  selector: 'app-bill-payments',
  templateUrl: './bill-payments.component.html',
  styleUrls: ['./bill-payments.component.css']
})
export class BillPaymentsComponent implements OnInit {

  constructor(private bankConnectionService:BankConnectionService,public loginservice:AuthenticationService) { }

  ngOnInit(): void {
  }
  addBillPayments(billpayments:BillPayments){
    this.bankConnectionService.addBillPayments(billpayments);
  }
}
