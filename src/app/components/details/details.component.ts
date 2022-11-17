import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public empleado!: Empleado;

  constructor(private _activeRoute:ActivatedRoute,private _service: EmpleadosService) { }

  ngOnInit(): void {
    //EN EL INIT DEL COMPONENT ES DONDE DEBEMOS SUSCRIBIRNOS
    //Y RECUPERAR PARAMTRO/S
    //UTILIZAMOS EL OBJETO DE LA INYECCION JUNTO A UNA PROMESA
    //LLAMADA suscribe
    this._activeRoute.params.subscribe((parametros:Params)=>{
      //DENRO DE Params, PODEMOS RECUPERAR CADA PARAMETRO POR 
      //SU NAME: parametros['PARAMETER NAME']
      if(parametros['idEmpleado'] != null){
        //LOS PARAMETROS SIEMPRE SON string
        var idEmpleado = parametros['idEmpleado'];
        this._service.getEmpleadosId(idEmpleado).subscribe(response => {
          this.empleado = response;
        });
      }
    });
    
  }

}
