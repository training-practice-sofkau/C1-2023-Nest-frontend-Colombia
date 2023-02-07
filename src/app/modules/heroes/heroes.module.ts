import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HeroesComponent } from "./pages/heroes-page/heroes.component";
import { HeroesListadoComponent } from "./components/heroes-listado/heroes-listado.component";
import { HeroesDetalleComponent } from "./components/heroes-detalle/heroes-detalle.component";
import { MessagesComponent } from "./messages/messages.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
    declarations: [
        HeroesComponent,
        HeroesListadoComponent,
        HeroesDetalleComponent,
        MessagesComponent,
        DashboardComponent
    ],
    exports:[
        HeroesComponent,
        MessagesComponent,
    ],
    imports:
    [
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class HeroesModule {}