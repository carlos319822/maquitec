import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Persona } from 'src/app/interfaces/persona';
import { PersonaService } from 'src/app/services/persona.service';





@Component({
  selector: 'app-hdvpersona',
  templateUrl: './hdvpersona.component.html',
  styleUrls: ['./hdvpersona.component.css']
})
export class HdvpersonaComponent implements OnInit {

  listPersonas: Persona[] =[];
  personas : Persona[] = [];

  contentColumns: string[] = ['nombres', 'cargo_aspirado', 'correo', 'telefono','ciudad','fecha_registro','HdV'];

  dataSource:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  model: Persona={
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    estado_civil: '',
    fecha_registro: '',
    estudios: '',
    estado: '',
    cargo_aspirado: '',
    experiencia_laboral: '',
    Hdv: ''
  }
 
  constructor(private personaService: PersonaService, private router:Router){}

  ngOnInit(): void {
    this.cargarPersonas();
    this.listar();
    
  }

  listar():void{
    console.log(this.personas)
    this.personaService.listar().subscribe((data:any) => {
      this.dataSource=new MatTableDataSource<Persona>(data.result as Persona[]);
      console.log(data);
    });
  }

  cargarPersonas(){
    this.dataSource = new MatTableDataSource(this.listPersonas);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
