import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faLanguage } from '@fortawesome/free-solid-svg-icons';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { CartModule } from '../cart/cart.module';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule, MatIconModule, MatMenuModule, FontAwesomeModule, CartModule, MatTooltipModule, MatButtonModule,MatBadgeModule
  ],
  exports: [NavBarComponent]
})
export class NavBarModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCoffee, faLanguage);
  }
}
