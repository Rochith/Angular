import { Component, OnInit } from '@angular/core';
import { BankConnectionService } from '../service/bank-connection.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor(private bankConnectionService:BankConnectionService) { }

  ngOnInit(): void {
  }

}
