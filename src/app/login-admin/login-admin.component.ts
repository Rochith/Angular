import { Component, OnInit } from '@angular/core';
import { Admin } from '../service/admin';
import { AuthenticationService } from '../service/authentication.service';
import { BankConnectionService } from '../service/bank-connection.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private bankConnectionService:BankConnectionService,public loginservice:AuthenticationService) { }

  ngOnInit(): void {
  }
  addAdmin(admin:Admin){
    this.bankConnectionService.addAdmin(admin);
  }
}
