import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';




@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent{

  loginData = {
    nombre:'',
    apellidos:'',
    correo: '',
    telefono:'',
    direccion: '',
    ciudad: '',
    estado_civil:'',
    estudio :'', 
    estado : '',
    cargo_aspirado : '',
    experiencia_laboral: '',
    fecha:'',
    HdV: '',
  }
  form: FormGroup;

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, private router: Router, private miServicio: PersonaService ){
    this.form = this.fb.group({
      nombre: [''],
      apellidos: [''],
      correo: [''],
      telefono: [''],
      direccion: [''],
      ciudad: [''],
      estado_civil: [''],
      estudio: [''],
      estado: [''],
      cargo_aspirado: [''],
      experiencia_laboral: [''],
      fecha: [''],
      HdV: [''],

    })
  }

  public archivos : any =[]
  
  estadoc :any[]=['Solter@','Casad@','Union Libre']
  estudio: any[]=['Bachiller','Tecnico','Tecnologo','Profesional','Curso Basico']
  estado: any[]=[ 'Terminado','En Curso']
  cargo: any[]=['Asesor','Mecanico','Administrador','Oficios Varios']
  experiencia: any []=['06 Meses','1 Año','2 Años','Mas']


  guardar(){

    this.miServicio.usuario(this.loginData).subscribe((data:any) => {
      console.log(data);

      this.mensaje();
      this.form.reset();
      // this.router.navigate(['dashboard'])
    },err => {
      this.error();
      
    }
    )   
  }

  mensaje(){
    setTimeout(() => {
      this._snackBar.open('Usuario guardado', '', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      
    }, 1500);
  }
  

  capturarFile(event: any){
    const archivoCapturado = event.target.files[0]
    this.archivos.push(archivoCapturado)
    console.log(event.target.files);
  }

  error() {
    this._snackBar.open('No se pudo guardar el usuario', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
