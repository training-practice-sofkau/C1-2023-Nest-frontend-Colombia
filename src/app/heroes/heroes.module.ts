import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HeroesComponent } from './heroes-page/heroes.component';
import { HeroesListadoComponent } from './heroes-listado/heroes-listado.component';
import { HeroesDetalleComponent } from './heroes-detalle/heroes-detalle.component';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
    declarations: [
        HeroesComponent,
        HeroesListadoComponent,
        HeroesDetalleComponent,
        MessagesComponent
    ],
    exports:[
        HeroesComponent,
        MessagesComponent,
    ],
    imports:
    [
        CommonModule,
        FormsModule
    ]
})
export class HeroesModule {}