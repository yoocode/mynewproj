import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class Service {
    urlforSpring = 'http://localhost:4040'

    constructor(private _http:Http){

    }

    getAllMap() : Observable<any>{
        return this._http.get(`${this.urlforSpring}/map/getAllMap`)
        .map(response => response.json());
    }
    getAllMenu() : Observable<any>{
        return this._http.get(`${this.urlforSpring}/menu/getAll`)
        .map(response => response.json());
    }

    postMenu(json:any): Observable<any>{
        let headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );
        return this._http.post(`${this.urlforSpring}/menu/post`, json, { headers: headers});
    }

    deleteMenu(id:any): Observable<any> {
        return this._http.delete(`${this.urlforSpring}/menu/${id}`);
    }
}