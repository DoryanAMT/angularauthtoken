import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Login } from "../models/login";

@Injectable()
export class ServiceEmpleados{
    public token!: string;

    constructor(private _http: HttpClient,){
        this.token = "";
    }

    authLogin(login: Login): Observable<any>{

        let json = JSON.stringify(login);
        // console.log(json);
        let header = new HttpHeaders();
        header = header.set("Content-type","application/json");
    
        let request = "/Auth/Login";
        let url = environment.urlApiPlantilla + request;
        this.token = "";
        return this._http.post(url, json, {headers: header})
    }

    getEmpleados():Observable<any>{
        let header = new HttpHeaders().set("Authorization", "bearer "+this.token)
        let request = "api/empleados"
        let url = environment.urlApiPlantilla + request;
        return this._http.get(url, {headers: header})
    }

    getSubordinados():Observable<any>{
        let header = new HttpHeaders().set("Authorization", "bearer "+this.token)
        let request = "api/Empleados/Subordinados"
        let url = environment.urlApiPlantilla + request;
        return this._http.get(url, {headers: header})
    }

    getPerfilEmpleado():Observable<any>{
        let header = new HttpHeaders().set("Authorization", "bearer "+this.token)
        let request = "api/empleados/perfilempleado"
        let url = environment.urlApiPlantilla + request;
        return this._http.get(url, {headers: header})
    }
    
}