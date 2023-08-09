import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit{

  public archivos : any =[]
  
  estadoc :any[]=['Solter@','Casad@','Union Libre']
  estudio: any[]=['Bachiller','Tecnico','Tecnologo','Profesional','Curso Basico']
  estado: any[]=[ 'Terminado','En Curso']
  cargo: any[]=['Asesor','Mecanico','Administrador','Oficios Varios']
  experiencia: any []=['06 Meses','1 Año','2 Años','Mas']


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  capturarFile(event: any){
    const archivoCapturado = event.target.files[0]
    this.archivos.push(archivoCapturado)
    console.log(event.target.files);
  }

  onSubmit(){
    
  }
}
