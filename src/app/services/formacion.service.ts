import { Injectable } from '@angular/core';
import { Formacion } from '../interfaces/formacion';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Formacion[]>{
    return this.http.get<Formacion[]>(`${environment.url_gateway}/formacion`)

  }

  getPersona(id: string): Observable<Formacion>{
    return this.http.get<Formacion>(`${environment.url_gateway}/formacion/${id}`)
  }
  usuario(infoFormacion: Formacion) {
    return this.http.post<Formacion>(`${environment.url_gateway}/formacion`,infoFormacion);
    }
}
