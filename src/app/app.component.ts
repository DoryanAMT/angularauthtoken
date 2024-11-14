import { Component, OnInit } from '@angular/core';
// import { ServiceEmpleados } from './services/service.empleados';
import { ServiceEmpleadosAxios } from './services/service.empleadosaxios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angularauthtoken';
  public mostrar: boolean;
  constructor(
    private _service: ServiceEmpleadosAxios
  ) {
    this.mostrar = false;
    console.log(_service.token)
  }

  ngOnInit(): void {
    // console.log(this._service.token);
    if (this._service.token != "") {
      this.mostrar = true;
    }
  }
}
