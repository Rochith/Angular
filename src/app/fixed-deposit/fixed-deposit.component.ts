import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { BankConnectionService } from '../service/bank-connection.service';
import { Fixed } from '../service/fixeddeposite';

@Component({
  selector: 'app-fixed-deposit',
  templateUrl: './fixed-deposit.component.html',
  styleUrls: ['./fixed-deposit.component.css']
})
export class FixedDepositComponent implements OnInit {

  fixed:Fixed;

  constructor(private bankConnectionService:BankConnectionService,public loginservice:AuthenticationService) { }

  ngOnInit(): void {
  }
  addFixedDeposit(fixed:Fixed){
    this.bankConnectionService.addFixedDeposit(fixed);
  }
}
