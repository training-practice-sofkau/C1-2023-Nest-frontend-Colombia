import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponenteEjemploComponent } from './components/componente-ejemplo/componente-ejemplo.component';

@NgModule({
  declarations: [ComponenteEjemploComponent],
  imports: [CommonModule],
  exports: [ComponenteEjemploComponent],
})
export class SharedModule {}
