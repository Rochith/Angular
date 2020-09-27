import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class BankConnectionService {

  url:string="http://localhost:9999/Bank";

  constructor(private http:HttpClient) { }

  addRegister(register:Register){
    this.http.post<Register>(this.url+"/add",register)
    .subscribe(register=>alert("Successfully Registered"+register.userId));
  }
}
