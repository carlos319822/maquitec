import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { HdvpersonaComponent } from './hdvpersona/hdvpersona.component';
import { CrearComponent } from './vacante/crear/crear.component';
import { ActualizarComponent } from './vacante/actualizar/actualizar.component';
import { ListarComponent } from './vacante/listar/listar.component';
import { PostulacionVacanteComponent } from './vacante/postulacion-vacante/postulacion-vacante.component';
import { VerAlertaComponent } from './alertas/ver-alerta/ver-alerta.component';
import { PerfilComponent } from './personas/perfil/perfil.component';
import { ActualizarPersonaComponent } from './personas/actualizar-persona/actualizar-persona.component';
import { CrearCertificadoComponent } from './certificados/crear-certificado/crear-certificado.component';
import { VerCertificadoComponent } from './certificados/ver-certificado/ver-certificado.component';
import { FormacionComponent } from './personas/formacion/formacion.component';
import { ExperienciaComponent } from './personas/experiencia/experiencia.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    HdvpersonaComponent,
    CrearPersonaComponent,
    CrearComponent,
    ActualizarComponent,
    ListarComponent,
    PostulacionVacanteComponent,
    VerAlertaComponent,
    PerfilComponent,
    ActualizarPersonaComponent,
    CrearCertificadoComponent,
    VerCertificadoComponent,
    FormacionComponent,
    ExperienciaComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatExpansionModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class DashboardModule { }
