import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit{

  ngOnInit() {
    this.formularioPrincipal = this.fb.group({
      infoAcademica: this.fb.array([this.crearFormularioInfoAcademica()]),
    });
  }
  
  estudio: any[] = ['Educación Basica Primaria', 'Educación Basica Secundaria', 'Bachillerato / Educacion Media', 'Universidad / Carrera Tecnica', 'Universidad / Carrera Tecnologica','Universidad / Carrera Profesional','Postgrado / Especializacion','Postgrado / Maestria','Postgrado / Doctorado', 'Otros']

  formularioPrincipal: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioPrincipal = this.fb.group({
      infoAcademica: this.fb.array([]),
    });
  }

  private crearFormularioInfoAcademica() {
    return this.fb.group({
      educativo: [''],
      cargo_aspirado: [''],
      fecha_ingreso: [''],
      fecha_retiro: ['']
    });
  }


  get infoAcademica() {
    return this.formularioPrincipal.get('infoAcademica') as FormArray;
  }

  agregarInfoAcademica() {
    const infoForm = this.fb.group({
      educativo: [''],
      cargo_aspirado: [''],
      fecha_ingreso: [''],
      fecha_retiro: ['']
    });
    this.infoAcademica.push(infoForm);
  }

  eliminarInfoAcademica(index: number) {
    this.infoAcademica.removeAt(index);
  }
}
