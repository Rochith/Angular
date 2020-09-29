import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { BankConnectionService } from '../service/bank-connection.service';
import { SavingsAccount } from '../service/savings';

@Component({
  selector: 'app-mini-statement',
  templateUrl: './mini-statement.component.html',
  styleUrls: ['./mini-statement.component.css']
})
export class MiniStatementComponent implements OnInit {

  constructor(private bankConnectionService:BankConnectionService) { }

  ngOnInit(): void {
    this.getAllMiniStatements();
  }

  ministatementList:SavingsAccount[]=[];

getAllMiniStatements(){
  this.bankConnectionService.getAllMiniStatements().subscribe(ministatements=>this.ministatementList=ministatements);
  console.log(this.ministatementList);
}

}
