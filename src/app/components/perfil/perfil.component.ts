import { Component, OnInit } from '@angular/core';
// import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleadosAxios } from '../../services/service.empleadosaxios';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  public perfil!: Empleado

  constructor(
    private _service: ServiceEmpleadosAxios,
    private _router: Router
  ){}

  ngOnInit(): void {
    if (this._service.token == "") {
      this._router.navigate(["/login"]);
    }else{
      // this._service.getPerfilEmpleado().subscribe(response => {
      //   console.log(response)
      //   this.perfil = response;
      // })
      this._service.getPerfilEmpleado().then(result => {
        this.perfil = result;
      })
    }
  }
}
