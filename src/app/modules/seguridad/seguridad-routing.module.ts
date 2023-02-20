import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

import {
    AngularFireAuthGuard,
    redirectLoggedInTo,
    redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToTareas = () => redirectLoggedInTo(['tareas']);

const routes: Routes = [
    {
    path: '',
    component: MainLayoutComponent,
    children: [
        {
        path:'login',// localhost:4200/login/registrar
        component: LoginComponent
        },
        {
        path:'registrar',// localhost:4200/login/registrar
        component: RegistrarComponent
        },
        {
        path: '**',
        redirectTo: 'login'
        }
    ]
    }
]

@NgModule({
    imports: [
    RouterModule.forChild( routes )
    ],
    exports: [
    RouterModule
    ]
})
export class SeguridadRoutingModule { }