// Libraries
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Routes
import { HojaDeVidaRoutingModule } from './hoja-de-vida-routing.module';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { EstudiosComponent } from './pages/estudios/estudios.component';
import { ExperienciaLaboralComponent } from './pages/experiencia-laboral/experiencia-laboral.component';
import { PrincipalComponent } from './pages/principal/principal.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    EstudiosComponent,
    ExperienciaLaboralComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent
  ],
  imports: [CommonModule, HojaDeVidaRoutingModule]
})
export class HojaDeVidaModule {}
