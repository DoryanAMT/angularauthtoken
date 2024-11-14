import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleadosAxios } from '../../services/service.empleadosaxios';

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
    // private _service: ServiceEmpleados,
    private _service: ServiceEmpleadosAxios,
    private _router: Router
  ){}

  login():void{
    let userName = this.cajaUsername.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let login = new Login(userName,password);

    // usando HttpClient, HttpHeaders
    // this._service.authLogin(login).subscribe(response => {
    //   this._service.token = response.response;
    //   this._router.navigate(["/"])
    //   console.log(response)
    // })

    // usando axios
    this._service.authLogin(login).then(result => {
      let token = result.data.response
      this._service.token = token;

      // console.log(this._service.token)
      this._router.navigate(["/"]);
    })
    
  }

  

}
