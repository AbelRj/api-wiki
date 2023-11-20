import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';


const MATERIAL_MODULES = [
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
MatToolbarModule,
MatSidenavModule,
MatButtonModule,
MatIconModule,
MatInputModule,
MatFormFieldModule,
MatListModule,
MatCardModule,
MatPaginatorModule,
MatTableModule,
MatDialogModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  exports:[
    MATERIAL_MODULES
  ],
})
export class MaterialModule { }
