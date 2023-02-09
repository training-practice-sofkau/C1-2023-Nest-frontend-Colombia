import { PrincipalComponent } from './pages/principal/principal.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', //localhost:4200/banco
    Component: PrincipalComponent,

},

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class bancoRoutingModule {}
