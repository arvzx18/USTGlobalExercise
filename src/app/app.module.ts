
import { MaterialModule } from './common/material-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './component/table/table.component';

import { GetJSONService } from './services/get-json.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [GetJSONService, TableComponent, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
