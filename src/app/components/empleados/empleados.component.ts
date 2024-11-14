import { Component, OnInit } from '@angular/core';
// import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleadosAxios } from '../../services/service.empleadosaxios';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent implements OnInit{
  public empleados!: Array<Empleado>;

  constructor(
    private _service: ServiceEmpleadosAxios,
    private _router: Router
  ){}

  ngOnInit(): void {
    if (this._service.token == "") {
      this._router.navigate(["/login"]);
    }else{
      // this._service.getEmpleados().subscribe(response => {
      //   this.empleados = response
      // })

      this._service.getEmpleados().then(result => {
        console.log(result)
        this.empleados = result
      })
    }
  }
}
