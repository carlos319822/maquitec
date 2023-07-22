import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { HdvpersonaComponent } from './hdvpersona/hdvpersona.component';
import { PublicarpersonaComponent } from './publicarpersona/publicarpersona.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
  children:[ 
    {path: '', component : InicioComponent},
    { path: 'postulados',component:HdvpersonaComponent},
    { path: 'postularse',component:PublicarpersonaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
