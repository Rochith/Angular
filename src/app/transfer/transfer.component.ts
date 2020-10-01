import { Component, OnInit } from '@angular/core';
import { BankConnectionService } from '../service/bank-connection.service';
import { Transfer } from '../service/transfer';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private bankConnectionService:BankConnectionService) { }

  ngOnInit(): void {
  }
  addTransfer(transfer:Transfer){
    this.bankConnectionService.addTransfer(transfer);
  }

}
