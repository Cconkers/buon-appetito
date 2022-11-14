import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaListComponent } from './pizza-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [PizzaListComponent],
  imports: [
    CommonModule, MatSnackBarModule, MatButtonModule, MatBadgeModule
  ], exports: [PizzaListComponent]
})
export class PizzaListModule { }
