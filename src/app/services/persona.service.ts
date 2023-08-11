import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  listPersonas: Persona[] = [
    {nombre:'Carlos Carvajal',apellidos:'Mecanico',correo:'carlos319822@gmail.com',telefono:'3043062587',direccion:'Timbio',ciudad:'19/12/2012',estado_civil:'',estudio:'',estado:'',cargo_aspirado:'',experiencia_laboral:'',fecha:'',HdV:'',},
    {nombre:'Angela Castillo',apellidos:'Asesor',correo:'angela@gmail.com',telefono:'3125879817',direccion:'Popayan',ciudad:'20/11/2012',estado_civil:'',estudio:'',estado:'',cargo_aspirado:'',experiencia_laboral:'',fecha:'',HdV:'',},
    {nombre:'Andres Andrade',apellidos:'Administrador',correo:'andres@gmail.com',telefono:'3125897845',direccion:'Timbio',ciudad:'20/12/2012',estado_civil:'',estudio:'',estado:'',cargo_aspirado:'',experiencia_laboral:'',fecha:'',HdV:'',},
    //{nombre:'',cargo:'',correo:'',celular:'',ciudad:'',fecha:'',HdV:''},
    
    
  ];

  constructor(private http: HttpClient) { }

  getPersona(){
    return this.listPersonas.slice();
  }
  usuario(infoPersona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${environment.url_persona}/personas`,
    infoPersona);
    }
}
