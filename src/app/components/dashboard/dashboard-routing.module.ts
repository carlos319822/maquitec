import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { HdvpersonaComponent } from './hdvpersona/hdvpersona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { PerfilComponent } from './personas/perfil/perfil.component';
import { ListarComponent } from './vacante/listar/listar.component';
import { PostulacionVacanteComponent } from './vacante/postulacion-vacante/postulacion-vacante.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
  children:[ 
    {path: '', component : InicioComponent},
    { path: 'postulados',component:HdvpersonaComponent},
    { path: 'postularse',component:CrearPersonaComponent},
    { path: 'perfil', component:PerfilComponent},
    { path: 'vacantes', component:ListarComponent},
    { path: 'vacante/1', component:PostulacionVacanteComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
