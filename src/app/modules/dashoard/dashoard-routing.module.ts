import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeeComponent } from './pages/homee/homee.component';

const routes: Routes = [
  {
    path: '',
    component: HomeeComponent,
    children: [
      // path: 'ejemplo',
      // component: componentetransaciones
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashoardRoutingModule {}
