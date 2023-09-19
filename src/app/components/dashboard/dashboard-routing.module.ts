import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { HdvpersonaComponent } from './hdvpersona/hdvpersona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { PerfilComponent } from './personas/perfil/perfil.component';
import { ListarComponent } from './vacante/listar/listar.component';
import { PostulacionVacanteComponent } from './vacante/postulacion-vacante/postulacion-vacante.component';
import { VerCertificadoComponent } from './certificados/ver-certificado/ver-certificado.component';
import { CrearCertificadoComponent } from './certificados/crear-certificado/crear-certificado.component';
import { VerAlertaComponent } from './alertas/ver-alerta/ver-alerta.component';
import { ExperienciaComponent } from './personas/experiencia/experiencia.component';
import { FormacionComponent } from './personas/formacion/formacion.component';
import { CrearComponent } from './vacante/crear/crear.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
  children:[ 
    {path: '', component : InicioComponent},
    { path: 'postulados',component:HdvpersonaComponent},
    { path: 'postularse',component:CrearPersonaComponent},
    { path: 'perfil', component:PerfilComponent},
    { path: 'vacantes', component:ListarComponent},
    { path: 'vacante/1', component:PostulacionVacanteComponent },
    { path: 'ver_certificado', component:VerCertificadoComponent},
    { path: 'crear_certificado', component:CrearCertificadoComponent},
    { path: 'alertas',component:VerAlertaComponent},
    { path: 'experiencia',component:ExperienciaComponent},
    { path: 'formacion', component:FormacionComponent},
    { path: 'crear_vacante', component:CrearComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
