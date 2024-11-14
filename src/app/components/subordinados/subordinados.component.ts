import { Component, OnInit } from '@angular/core';
// import { ServiceEmpleados } from '../../services/service.empleados';
import { Empleado } from '../../models/empleado';
import { Router } from '@angular/router';
import { ServiceEmpleadosAxios } from '../../services/service.empleadosaxios';

@Component({
  selector: 'app-subordinados',
  templateUrl: './subordinados.component.html',
  styleUrl: './subordinados.component.css'
})
export class SubordinadosComponent implements OnInit{
  public subordinados!: Array<Empleado>;

  constructor(
    private _service: ServiceEmpleadosAxios,
    private _router: Router
  ){}

  ngOnInit(): void {
    if (this._service.token == "") {
      this._router.navigate(["/login"]);
    }else{
      // this._service.getSubordinados().subscribe(response => {
      //   this.subordinados = response;
      // })
      this._service.getSubordinados().then(result => {
        this.subordinados = result
      })
    }
    
  }
}
