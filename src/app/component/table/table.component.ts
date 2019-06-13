import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';

import {MatPaginator, MatTableDataSource} from '@angular/material';
import { GetJSONService } from 'src/app/services/get-json.service';

import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['client', 'matter', 'matterName', 'filing', 'inPrep', 'lastModified'];
  // ELEMENT_DATA: MatterClass[] = [];

  // dataSource = new MatTableDataSource<MatterClass>(this.ELEMENT_DATA);
  @Input() dataSource: any = []

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: GetJSONService, private datePipe:DatePipe) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

interface MatterClass {
  client: string;
  matter: string;
  matterName: string;
  filing: string;
  inPrep: string;
  lastModified: string;
}
