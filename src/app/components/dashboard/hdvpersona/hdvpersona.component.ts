import { Component } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';



const listPersona: Persona[] = [
  {nombre:'Carlos Carvajal',cargo:'Mecanico',correo:'carlos319822@gmail.com',celular:'3043062587',ciudad:'Timbio',fecha:'19/12/2012',HdV:''},
  {nombre:'Angela Castillo',cargo:'Asesor',correo:'angela@gmail.com',celular:'3125879817',ciudad:'Popayan',fecha:'20/11/2012',HdV:''},
  //{nombre:'',cargo:'',correo:'',celular:'',ciudad:'',fecha:'',HdV:''},
  
  
];

@Component({
  selector: 'app-hdvpersona',
  templateUrl: './hdvpersona.component.html',
  styleUrls: ['./hdvpersona.component.css']
})
export class HdvpersonaComponent {

 

  displayedColumns: string[] = ['nombre', 'cargo', 'correo', 'celular','ciudad','fecha','HdV'];
  dataSource = listPersona;
  


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
