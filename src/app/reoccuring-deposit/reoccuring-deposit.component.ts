import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { BankConnectionService } from '../service/bank-connection.service';
import { ReoccuringAccount } from '../service/reoccuringaccount';

@Component({
  selector: 'app-reoccuring-deposit',
  templateUrl: './reoccuring-deposit.component.html',
  styleUrls: ['./reoccuring-deposit.component.css']
})
export class ReoccuringDepositComponent implements OnInit {

  reoccuring:ReoccuringAccount;

  constructor(private bankConnectionService:BankConnectionService,public loginservice:AuthenticationService) { }

  ngOnInit(): void {
  }

  addReoccuringAccount(reoccuring:ReoccuringAccount){
    this.bankConnectionService.addReoccuringAccount(reoccuring);
  }

}
