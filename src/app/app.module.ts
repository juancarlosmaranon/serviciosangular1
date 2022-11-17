import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PadrecomicsComponent } from './components/padrecomics/padrecomics.component';
import { HijocomicComponent } from './components/hijocomic/hijocomic.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { ComicsService } from './services/comics.service';
import  {HttpClientModule} from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';

import { PersonasService } from './services/personas.service';
import { EmpleadosService } from './services/empleados.service';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { PlantillaService } from './services/plantilla.service';
import { MaestrodetalleComponent } from './components/maestrodetalle/maestrodetalle.component';
import { DetailsComponent } from './components/details/details.component';
// import { EmpleadosoficioComponent } from './component/empleadosoficio/empleadosoficio.component';

@NgModule({
  declarations: [
    AppComponent,
    PadrecomicsComponent,
    HijocomicComponent,
    MenuComponent,
    HomeComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent,
    EmpleadossalarioComponent,
    EmpleadosoficioComponent,
    PlantillaComponent,
    MaestrodetalleComponent,
    DetailsComponent,
  
  ],
  imports: [
    HttpClientModule
    , BrowserModule
    , routing
    , FormsModule
  ],
  providers: [EmpleadosService
    , appRoutingProviders
    , ComicsService
    , PersonasService
    , PlantillaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
