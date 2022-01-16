import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Login }         from '../../models/login';

import { AuthService }     from '../../services/auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  public login:Login = new Login();

  constructor(
    private auth:   AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  next(){
    //this.appUIUtilsService.showMessage( "Usuario o contraseña incorrecta." );
    //this.auth.login( this.login );
  }

  keyPress( e, input ){
    
  }

}
