import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "../../environments/environment.development";
import { Login } from "../models/login";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ServiceEmpleadosAxios {
    public token !: string;
    constructor() {
        this.token = "";
    }

    
    public get getToken() : string {
        return this.token
    }
    

    authLogin(login: Login): Promise<any> {
        return new Promise(function (resolve) {

            let request = "Auth/Login";
            let url = environment.urlApiPlantilla + request;

            axios.post(url, login).then(response => {
                resolve(response);
                // console.log(result);
            })
        })
    }

    getEmpleados(): Promise<any> {
        let token = "Bearer " + this.token
        // console.log(token)
        return new Promise(function (resolve) {
            let request = "api/Empleados/"
            let url = environment.urlApiPlantilla + request;
            axios.get(url, {
                headers:
                {
                    Authorization: token
                }
            }).then(response => {
                resolve(response.data);
            })
        })
    }

    getSubordinados():Promise<any>{
        let token = "Bearer " + this.token
        return new Promise(function (resolve) {
            let request = "api/Empleados/Subordinados"
            let url = environment.urlApiPlantilla + request;

            axios.get(url, {
                headers:
                {
                    Authorization: token
                }
            }).then(response => {
                console.log(response)
                resolve(response.data);
            })
        })
    }
    
    getPerfilEmpleado():Promise<any>{
        let token = "Bearer " + this.token
        return new Promise(function (resolve) {
            let request = "api/empleados/perfilempleado"
            let url = environment.urlApiPlantilla + request;

            axios.get(url, {
                headers:
                {
                    Authorization: token
                }
            }).then(response => {
                console.log(response)
                resolve(response.data);
            })
        })
    }

}