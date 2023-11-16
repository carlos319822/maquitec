import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormacionService } from 'src/app/services/formacion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private miServicio: FormacionService, private _snackBar: MatSnackBar, private router: Router,) {
    this.formularioPrincipal = this.fb.group({
      infoAcademica: this.fb.array([]),
    });
  }

  private crearFormularioInfoAcademica() {
    return this.fb.group({
      educativo: ['', [Validators.required]],
      cargo_aspirado: ['', [Validators.required]],
      fecha_ingreso: ['', [Validators.required]],
      fecha_retiro: ['', [Validators.required]]
    });
  }


  get infoAcademica() {
    return this.formularioPrincipal.get('infoAcademica') as FormArray;
  }

  agregarInfoAcademica() {
    const infoForm = this.fb.group({
      educativo: ['', [Validators.required]],
      cargo_aspirado: ['', [Validators.required]],
      fecha_ingreso: ['', [Validators.required]],
      fecha_retiro: ['', [Validators.required]]
    });
    this.infoAcademica.push(infoForm);
  }

  eliminarInfoAcademica(index: number) {
    this.infoAcademica.removeAt(index);
  }
  guardar(){
    for(let item of this.formularioPrincipal.value.infoAcademica){
      this.miServicio
        .usuario(item)
        .subscribe({
          next: (data: any) => {
            this.mensaje('Información registrada');
          },
          error: err => {
            console.log(err)
            this.mensaje('No se pudo guardar la información')
          },
          complete(){
            
          }
        })
      }
    this.router.navigate(['/dashboard/perfil'])
  }

  mensaje(text: any) {
    setTimeout(() => {
      this._snackBar.open(text, '', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })

    }, 1500);
  }
}
