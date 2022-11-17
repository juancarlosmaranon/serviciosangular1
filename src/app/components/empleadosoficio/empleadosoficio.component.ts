import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {

  public oficios!:Array<string>;
  @ViewChild("selectoficio") selectoficio!: ElementRef;
  public empleados!: Array<Empleado>;

  buscarEmpleado(): void{
    var oficio = this.selectoficio.nativeElement.value;
    this._service.getEmpleadosOficio(oficio).subscribe(response=>{
      this.empleados = response;
    })
  }

  constructor(private _service:EmpleadosService) { }

  ngOnInit(): void {
    this._service.getOficios().subscribe(response=>{
      this.oficios = response;
    })
  }

}
