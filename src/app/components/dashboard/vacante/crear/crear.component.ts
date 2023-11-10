import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  ngOnInit() {
    this.formularioPrincipal = this.fb.group({
      infoAcademica: this.fb.array([this.crearFormularioInfoAcademica()]),
    });
  }
  
  lugar: any[] = ['Popayán','Timbío','Rosas','Tambo','La Sierra','Piendamo']

  jornada: any[]=['Tiempo Completo', 'Medio Tiempo','Por Horas']

  salario: any[]=['1.160.000 a 1.500.000', '1.500.000 a 2.000.000']

  formularioPrincipal: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioPrincipal = this.fb.group({
      infoAcademica: this.fb.array([]),
    });
  }

  private crearFormularioInfoAcademica() {
    return this.fb.group({
      nombreVacante: [''],
      lugar: [''],
      jornada: [''],
      salario: [''],
      descripcion: [''],
      requisitos:['']
    });
  }

  get infoAcademica() {
    return this.formularioPrincipal.get('infoAcademica') as FormArray;
  }

  agregarOtraVacante() {
    const infoForm = this.fb.group({
      nombreVacante: [''],
      lugar: [''],
      jornada: [''],
      salario: [''],
      descripcion: [''],
      requisitos:['']
    });
    this.infoAcademica.push(infoForm);
  }

  eliminarVacante(index: number) {
    this.infoAcademica.removeAt(index);
  }

}
