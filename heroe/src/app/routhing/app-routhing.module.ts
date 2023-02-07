import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from '../dasboard/dasboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroeComponent } from '../heroe/heroe.component';

const routes: Routes = [{path:'',redirectTo:'/dashboard',pathMatch:'full'},
                        {path:'heroes', component: HeroeComponent},
                        {path:'detail/:id', component: HeroDetailComponent},
                        {path:'dashboard', component: DasboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouthingModule { }
