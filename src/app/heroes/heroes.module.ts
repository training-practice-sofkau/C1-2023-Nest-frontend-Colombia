import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HeroesComponent } from './heroes-page/heroes.component';
import { HeroesListadoComponent } from './heroes-listado/heroes-listado.component';
import { HeroesDetalleComponent } from './heroes-detalle/heroes-detalle.component';



@NgModule({
    declarations: [
        HeroesComponent,
        HeroesListadoComponent,
        HeroesDetalleComponent
    ],
    exports:[
        HeroesComponent
    ],
    imports:
    [
        CommonModule,
        FormsModule
    ]
})
export class HeroesModule {}