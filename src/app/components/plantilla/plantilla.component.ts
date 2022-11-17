import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlantillaService } from 'src/app/services/plantilla.service';
import { Plantilla } from 'src/app/models/plantilla';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  public plantilla!: Array<any>;
  @ViewChild("selectfuncion") selectfuncion!: ElementRef;
  public funciones!: Array<Plantilla>;

  constructor(private _service: PlantillaService) { }

  buscarFuncion():void{

    var selecciones = this.selectfuncion.nativeElement.selectedOptions;
    var solicitud = "api/Plantilla/PlantillaFunciones?";

    for(var i=0;i<selecciones.length;i++){
      solicitud += "funcion="+selecciones[i].value;

      if(i!=selecciones.length-1){
        solicitud += "&";
      }
    }

    this._service.getPlantillaFuncion(solicitud).subscribe(response=>{
      this.plantilla = response;
    })
  }

  ngOnInit(): void {

    this._service.getPlantillaSelect().subscribe(response=>{
      this.funciones = response;
    })
    
  }

}
