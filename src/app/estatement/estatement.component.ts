import { Component, OnInit } from '@angular/core';
import { BankConnectionService } from '../service/bank-connection.service';
import { SavingsAccount } from '../service/savings';

@Component({
  selector: 'app-estatement',
  templateUrl: './estatement.component.html',
  styleUrls: ['./estatement.component.css']
})
export class EstatementComponent implements OnInit {

  constructor(private bankConnectionService:BankConnectionService) { }

  ngOnInit(): void {
    this.getAllMiniStatements();
  }
  estatementList:SavingsAccount[]=[];

getAllMiniStatements(){
  this.bankConnectionService.getAllMiniStatements().subscribe(ministatements=>this.estatementList=ministatements);
  console.log(this.estatementList);
}
}
