import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MatButtonModule } from '@angular/material/button';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule, MatButtonModule,  FontAwesomeModule, MatTooltipModule, MatCardModule, MatBadgeModule
  ], exports: [CartComponent]
})
export class CartModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCartShopping);
  }
}
