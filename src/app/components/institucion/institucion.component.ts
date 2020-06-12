import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  codModular: string;
  nombre: string;
  direccion: string;
  numero: string;
  nivel: string;
  modalidad: string;
  turno: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codModular: '112345', nombre: 'Juan Espinoza Medrano', direccion: 'Av. Belen de Osma', numero: '542012', nivel: 'Secundaria', modalidad: 'EBR', turno: 'Mañana'},
  {codModular: '562143', nombre: 'Guillermo Pinto Ismodes', direccion: 'Jr. Ramon Castilla', numero: '425312', nivel: 'Secundaria', modalidad: 'EBR', turno: 'Mañana'},
  {codModular: '245812', nombre: 'Belen de Osma y Pardo', direccion: 'Av. Juan espinoza Medrano', numero: '542123', nivel: 'Secundaria', modalidad: 'EBR', turno: 'Tarde'},
  {codModular: '452153', nombre: 'Trilce', direccion: 'Av. jose Maria', numero: '550012', nivel: 'Primaria', modalidad: 'EBR', turno: 'Mañana'},
  {codModular: '554554', nombre: 'Agropecuario numero 2', direccion: 'Av. San Jeronimo', numero: '58745', nivel: 'Secundaria', modalidad: 'CEBA', turno: 'Mañana'},
  {codModular: '532012', nombre: 'Nuestra Señora de Fatima', direccion: 'Av. Tupac Amaru', numero: '54210', nivel: 'Primaria', modalidad: 'EBR', turno: 'Mañana'},/**
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', custom: 'sf'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', custom: 'sf'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', custom: 'sf'}, 
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},*/
];

@Component({
  selector: 'app-institucion',
  templateUrl: './institucion.component.html',
  styleUrls: ['./institucion.component.css']
})
export class InstitucionComponent implements OnInit {

  displayedColumns: string[] = ['codModular', 'nombre', 'direccion', 'numero', 'nivel', 'modalidad', 'turno', 'ACTION'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
    
  constructor() { }

  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
