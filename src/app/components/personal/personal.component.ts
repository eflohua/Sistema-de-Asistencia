import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  DNI: string;
  Nombres: string;
  apepat: string;
  apemat: string;
  Jornada: number;
  Contrato: string;
  Cargo: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {DNI: '31254532', Nombres: 'Oreja', apepat: 'Flores', apemat: 'Infanzon', Jornada: 30, Contrato: 'Contratado', Cargo: 'Docente'},
  {DNI: '42565215', Nombres: 'Paolo', apepat: 'Guerrero', apemat: 'Gonzales', Jornada: 20, Contrato: 'Nombrado', Cargo: 'Docente'},
  {DNI: '75412356', Nombres: 'Ollanta', apepat: 'Humala', apemat: 'Tasso', Jornada: 40, Contrato: 'Nombrado', Cargo: 'Director'},
  {DNI: '36952849', Nombres: 'Pedro Pablo', apepat: 'Kuckcynski', apemat: 'Pampañaupa', Jornada: 40, Contrato: 'Nombrado', Cargo: 'Docente'},
  {DNI: '96352452', Nombres: 'Keyko', apepat: 'Higuchi', apemat: 'Caceres', Jornada: 32, Contrato: 'Contratado', Cargo: 'Auxiliar'},
  {DNI: '85246970', Nombres: 'Kenyi', apepat: 'Higuchi', apemat: 'Caceres', Jornada: 26, Contrato: 'Contratado', Cargo: 'Psicologo'},
];

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  displayedColumns: string[]  = ['DNI', 'Nombres', 'apepat', 'apemat', 'Cargo', 'Contrato', 'Jornada', 'ACTION'];
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
