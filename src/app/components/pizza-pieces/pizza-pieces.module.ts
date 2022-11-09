import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaPiecesComponent } from './pizza-pieces.component';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [PizzaPiecesComponent],
  imports: [CommonModule], exports: [
    PizzaPiecesComponent, MatButtonModule
  ]
})
export class PizzaPiecesModule { }
