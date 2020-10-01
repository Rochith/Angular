import { Component, OnInit } from '@angular/core';
import { Balance } from '../service/balance';
import { BankConnectionService } from '../service/bank-connection.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor(private bankConnectionService:BankConnectionService) { }

  ngOnInit(): void {
    this.getBalance();
  }
  balanceList:Balance[]=[];

  getBalance(){
    this.bankConnectionService.getBalance().subscribe(balance=>this.balanceList=balance);
    console.log(this.balanceList);
  }

}
