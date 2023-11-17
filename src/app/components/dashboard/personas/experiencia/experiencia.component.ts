import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private miServicio: ExperienciaService, private _snackBar: MatSnackBar, private router: Router) {
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

  guardar(){
    for(let item of this.formularioPrincipal.value.infoExperiencia){
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
    // this.router.navigate(['/dashboard/perfil'])
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
