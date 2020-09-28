import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { BankConnectionService } from '../service/bank-connection.service';
import { RemittanceManagement } from '../service/remittance';

@Component({
  selector: 'app-remittance-management',
  templateUrl: './remittance-management.component.html',
  styleUrls: ['./remittance-management.component.css']
})
export class RemittanceManagementComponent implements OnInit {

  remittance:RemittanceManagement;
  
  constructor(private bankConnectionService:BankConnectionService,public loginservice:AuthenticationService) { }

  ngOnInit(): void {
  }

  addRemittanceManagement(remittance:RemittanceManagement){
    this.bankConnectionService.addRemittanceManagement(remittance);
  }

}
