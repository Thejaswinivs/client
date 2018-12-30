import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatInputModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatCardModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatTableModule
  ],
  declarations: []
})
export class MaterialModule { }
