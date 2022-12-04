import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreatePizzaComponent } from './create-pizza.component';



@NgModule({
  declarations: [CreatePizzaComponent],
  imports: [
    CommonModule, MatButtonModule, FontAwesomeModule, MatTooltipModule, MatCardModule, MatBadgeModule
  ], exports: [CreatePizzaComponent]
})
export class CreatePizzaModule { }
