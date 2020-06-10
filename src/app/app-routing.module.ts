import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PersonalComponent } from './components/personal/personal.component';
import { InstitucionComponent } from './components/institucion/institucion.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "personal", component: PersonalComponent},
  {path: "institucion", component: InstitucionComponent},
  {path: "registro", component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
