import { Injectable } from '@angular/core';
import { Experiencia } from '../interfaces/experiencia';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${environment.url_gateway}/xxperiencia`)

  }

  getPersona(id: string): Observable<Experiencia>{
    return this.http.get<Experiencia>(`${environment.url_gateway}/experiencia/${id}`)
  }
  usuario(infoExperiencia: Experiencia) {
    return this.http.post<Experiencia>(`${environment.url_persona}/experiencia`,infoExperiencia);
    }
}
