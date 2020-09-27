import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  invalidLogin = false;

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  checkLogin(data){

    if(this.authService.authenticate(data.username,data.password)){

        this.router.navigate(['home']);
        this.invalidLogin = false;

    }

    else
      this.invalidLogin = true;

}

}
