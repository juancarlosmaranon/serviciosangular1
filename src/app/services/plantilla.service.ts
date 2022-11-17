import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PlantillaService {
    constructor(private _http: HttpClient) {}

    getPlantillaSelect(): Observable<any>{
        var request = "/api/Plantilla/Funciones";
        var url = environment.urlPlantilla + request;
        return this._http.get(url);
    }
    
    getPlantillaFuncion(funcion:string): Observable<any>{
        var url = environment.urlPlantilla + funcion;
        return this._http.get(url);
    }
}