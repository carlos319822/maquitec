import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/interfaces/cargo';
import { Formacion } from 'src/app/interfaces/formacion';
import { Caras, Forma, Persona } from 'src/app/interfaces/persona';
import { PersonaService } from 'src/app/services/persona.service';




@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent{

  model: Persona ={
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    estado_civil: '',
    fecha_registro: new Date().toISOString(),
    estudios: '',
    estado: '',
    cargo_aspirado: '',
    experiencia_laboral: '',
    Hdv: ''
  }

  modeli: Caras={
    cargo_aspirado: '',
    experiencia: '',
    Hdv: ''
  }

  modelo: Forma={
    estudios: '',
    estado: ''
  }

  loginData = {
    nombre:'',
    apellidos:'',
    correo: '',
    telefono:'',
    direccion: '',
    ciudad: '',
    estado_civil:'',
    fecha_registro: new Date().toISOString(),
  }

  estadoc :any[]=['Soltero','Soltera','Casado','Casada','Union Libre']
  estudio: any[]=['Bachiller','Tecnico','Tecnologo','Profesional','Curso Basico']
  estado: any[]=[ 'Terminado','En Curso']
  cargo: any[]=['Asesor','Mecanico','Administrador','Oficios Varios']
  experiencia: any []=['06 Meses','1 Año','2 Años','Mas']

  
  

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, private router: Router, private miServicio: PersonaService ){
    
  }

  personaform= new FormGroup({
    nombre:new FormControl('',Validators.required),
    apellidos: new FormControl('',Validators.required),
    correo: new FormControl('',Validators.required), 
    telefono: new FormControl('',Validators.required), 
    direccion: new FormControl('',Validators.required),
    ciudad: new FormControl('',Validators.required),
    estado_civil:new FormControl('',Validators.required),
    cargo_aspirado:new FormControl('',Validators.required),
    experiencia:new FormControl('',Validators.required),
    estudios:new FormControl('',Validators.required),
    estado:new FormControl('',Validators.required),
  })

  public archivos : any =[]
  
 


  guardar(){

    this.miServicio.usuario(this.model).subscribe((data:any) => {
      console.log(data);

      this.mensaje();
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
