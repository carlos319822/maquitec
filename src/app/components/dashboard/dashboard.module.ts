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


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    HdvpersonaComponent,
    CrearPersonaComponent,
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
