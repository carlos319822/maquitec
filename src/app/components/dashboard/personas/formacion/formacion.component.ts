import { Component } from '@angular/core';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {


  estudio: any[] = ['Educación Basica Primaria', 'Educación Basica Secundaria', 'Bachillerato / Educacion Media', 'Universidad / Carrera Tecnica', 'Universidad / Carrera Tecnologica','Universidad / Carrera Profesional','Postgrado / Especializacion','Postgrado / Maestria','Postgrado / Doctorado', 'Otros']

}
