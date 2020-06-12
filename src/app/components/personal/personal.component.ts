import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  DNI: string;
  Nombres: string;
  apepat: string;
  apemat: string;
  Jornada: string;
  Contrato: string;
  Cargo: string;
}
const ELEMENT_DATA: PeriodicElement[] = [{DNI: '112345', Nombres: 'Juan Espinoza Medrano', apepat: 'Av. Belen de Osma', apemat: '542012', Cargo: 'Secundaria', Contrato: 'EBR', Jornada: 'Mañana'}];

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
