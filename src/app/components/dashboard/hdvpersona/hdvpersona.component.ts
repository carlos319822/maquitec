import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';





@Component({
  selector: 'app-hdvpersona',
  templateUrl: './hdvpersona.component.html',
  styleUrls: ['./hdvpersona.component.css']
})
export class HdvpersonaComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 
  listPersona: Persona[] = [
    {nombre:'Carlos Carvajal',cargo:'Mecanico',correo:'carlos319822@gmail.com',celular:'3043062587',ciudad:'Timbio',fecha:'19/12/2012',HdV:''},
    {nombre:'Angela Castillo',cargo:'Asesor',correo:'angela@gmail.com',celular:'3125879817',ciudad:'Popayan',fecha:'20/11/2012',HdV:''},
    {nombre:'Andres Andrade',cargo:'Administrador',correo:'andres@gmail.com',celular:'3125897845',ciudad:'Timbio',fecha:'20/12/2012',HdV:''},
    //{nombre:'',cargo:'',correo:'',celular:'',ciudad:'',fecha:'',HdV:''},
    
    
  ];

  displayedColumns: string[] = ['nombre', 'cargo', 'correo', 'celular','ciudad','fecha','HdV'];

  dataSource = new MatTableDataSource(this.listPersona);

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
