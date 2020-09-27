import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { BankConnectionService } from '../service/bank-connection.service';
import { Register } from '../service/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:Register;

  constructor(private bankConnectionService:BankConnectionService,public loginservice:AuthenticationService) { }

  ngOnInit(): void {
  }

  addRegister(register:Register){
    this.bankConnectionService.addRegister(register);
  }

}
