import { Component, OnInit } from '@angular/core';
import { BankConnectionService } from '../service/bank-connection.service';
import { WithDraw } from '../service/withdraw';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor(private bankConnectionService:BankConnectionService) { }

  ngOnInit(): void {
  }

  addAmount(withdraw:WithDraw){
    this.bankConnectionService.addAmount(withdraw);
  }

}
