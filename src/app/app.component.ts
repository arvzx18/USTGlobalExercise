import { Component, Input, Output } from '@angular/core';

import { GetJSONService } from './services/get-json.service';

import { TableComponent } from './component/table/table.component';

import {DatePipe} from '@angular/common';

import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exTest';
  data: any = [];

  // dataSource = new MatTableDataSource<MatterClass>(this.ELEMENT_DATA);

  totalItems: any = 0;

  autoGenData: any = [];

  constructor(private service: GetJSONService, private tableC: TableComponent, private datePipe: DatePipe) { }

  ngOnInit() {
    this.service.getContentJSON().subscribe(res => {
      this.data = res.fields
      this.totalItems = this.data.length
    });
  }

  newItem() {
    this.refresh();
  }

  refresh() {
    
    let object = {
      client: 'rf' + Math.floor(Math.random() * 100) + 1,
      matter: Math.floor(Math.random() * 100) + 1,
      matterName: 'test',
      filing: Math.floor(Math.random() * 100) + 1,
      inPrep: Math.floor(Math.random() * 100) + 1,
      lastModified: this.datePipe.transform(new Date(),"d/M/yy")
    }

    this.autoGenData.push(object);

    this.service.getContentJSON().subscribe(res => {
      this.data = res.fields 
      
      for(let item of this.autoGenData) {
        this.data.push(item)
      }
      this.totalItems = this.data.length
    });
  }
}
