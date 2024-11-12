import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from './services/service.empleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angularauthtoken';
  public mostrar: boolean;
  constructor(
    private _service: ServiceEmpleados
  ) {
    this.mostrar = false;
  }

  ngOnInit(): void {
    if (this._service.token != "") {
      this.mostrar = true;
    }
  }
}
