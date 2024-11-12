import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Login } from "../models/login";

@Injectable()
export class ServiceLogin{
    constructor(
        private _http: HttpClient
    ){}

    authLogin(login: Login): Observable<any>{

        let json = JSON.stringify(login);
        console.log(json);
        let header = new HttpHeaders();
        header = header.set("Content-type","application/json");
    
        let request = "/Auth/Login";
        let url = environment.urlApiPlantilla + request;
        return this._http.post(url, json, {headers: header})
        
    }

    getEmpleados(token: string):Observable<any>{
        let header = new HttpHeaders().set("Authorization", "bearer "+token)
        
        let request = "api/empleados"
        let url = environment.urlApiPlantilla + request;
        return this._http.get(url, {headers: header})
    }
}