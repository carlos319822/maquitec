import { Component } from '@angular/core';




@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent {

  
  estadoc :any[]=['Solter@','Casad@','Union Libre']
  estudio: any[]=['Bachiller','Tecnico','Tecnologo','Profesional','Curso Basico']
  estado: any[]=[ 'Terminado','En Curso']
  cargo: any[]=['Asesor','Mecanico','Administrador','Oficios Varios']
  experiencia: any []=['06 Meses','1 Año','2 Años','Mas']
}
