import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild("cajausername") cajaUsername!: ElementRef
  @ViewChild("cajapassword") cajaPassword!: ElementRef

  public token!: string;
  public empleados !: Array<Empleado>;
  
  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ){}

  login():void{
    let userName = this.cajaUsername.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let login = new Login(userName,password);

    this._service.authLogin(login).subscribe(response => {
      this._service.token = response.response;
      this._router.navigate(["/"])
      console.log(response)
    })
    
  }

  

}
