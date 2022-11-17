import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { PadrecomicsComponent } from "./components/padrecomics/padrecomics.component";
import { ComicsinyeccionComponent } from "./components/comicsinyeccion/comicsinyeccion.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { EmpleadossalarioComponent } from "./components/empleadossalario/empleadossalario.component";
import { EmpleadosoficioComponent } from "./components/empleadosoficio/empleadosoficio.component";
import { PlantillaComponent } from "./components/plantilla/plantilla.component";
import { MaestrodetalleComponent } from "./components/maestrodetalle/maestrodetalle.component";
import { DetailsComponent } from "./components/details/details.component";

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "padrecomics", component:PadrecomicsComponent},
    {path: "comicsinyeccion", component: ComicsinyeccionComponent},
    {path: "personasapi", component: PersonasapiComponent},
    {path: "empleadossalario", component: EmpleadossalarioComponent},
    {path: "empleadosoficio", component: EmpleadosoficioComponent},
    {path: "plantilla", component: PlantillaComponent},
    {path: "maestrodetalle", component:MaestrodetalleComponent},
    {path: "details/:idEmpleado", component:DetailsComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);