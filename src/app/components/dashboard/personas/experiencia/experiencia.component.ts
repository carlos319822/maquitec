import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
  

export class ExperienciaComponent implements OnInit{
  
  ngOnInit() {
    this.formularioPrincipal = this.fb.group({
      infoExperiencia: this.fb.array([this.crearFormularioinfoExperiencia()]),
    });
  }
  formularioPrincipal: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioPrincipal = this.fb.group({
      infoExperiencia: this.fb.array([]),
    });
  }

  private crearFormularioinfoExperiencia() {
    return this.fb.group({
      cargo: [''],
      nomempresa: [''],
      funciones: [''],
      fecha_ingreso: [''],
      fecha_retiro: ['']
    });
  }
  get infoExperiencia() {
    return this.formularioPrincipal.get('infoExperiencia') as FormArray;
  }

  agregarinfoExperiencia() {
    const infoForm = this.fb.group({
      cargo: [''],
      nomempresa: [''],
      funciones: [''],
      fecha_ingreso: [''],
      fecha_retiro: ['']
    });
    this.infoExperiencia.push(infoForm);
  }

  eliminarinfoExperiencia(index: number) {
    this.infoExperiencia.removeAt(index);
  }
}
