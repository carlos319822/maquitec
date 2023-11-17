import { Injectable } from '@angular/core';
import { Vacante } from '../interfaces/vacante';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VacanteService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Vacante[]>{
    return this.http.get<Vacante[]>(`${environment.url_gateway}/vacante`)

  }

  getPersona(id: string): Observable<Vacante>{
    return this.http.get<Vacante>(`${environment.url_gateway}/vacante/${id}`)
  }
  usuario(infoVacante: Vacante) {
    return this.http.post<Vacante>(`${environment.url_persona}/vacante`,infoVacante);
    }
}
