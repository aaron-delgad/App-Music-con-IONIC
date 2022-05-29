import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  loginUser(login){
    return new Promise((access, rejects)=>{
      if(login.email === 'radees.24.16@gmail.com' && login.password === '12345'){
        access('login correcto');
      }else{
        rejects('login incorrecto');
      }
    });
  }
}
