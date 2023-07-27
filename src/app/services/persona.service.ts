import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  listPersonas: Persona[] = [
    {nombre:'Carlos Carvajal',cargo:'Mecanico',correo:'carlos319822@gmail.com',celular:'3043062587',ciudad:'Timbio',fecha:'19/12/2012',HdV:'',estadocivil:''},
    {nombre:'Angela Castillo',cargo:'Asesor',correo:'angela@gmail.com',celular:'3125879817',ciudad:'Popayan',fecha:'20/11/2012',HdV:'',estadocivil:''},
    {nombre:'Andres Andrade',cargo:'Administrador',correo:'andres@gmail.com',celular:'3125897845',ciudad:'Timbio',fecha:'20/12/2012',HdV:'',estadocivil:''},
    //{nombre:'',cargo:'',correo:'',celular:'',ciudad:'',fecha:'',HdV:''},
    
    
  ];

  constructor() { }

  getPersona(){
    return this.listPersonas.slice();
  }
}
