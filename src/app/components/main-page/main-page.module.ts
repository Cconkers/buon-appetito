import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaPiecesModule } from '../pizza-pieces/pizza-pieces.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PizzaListModule } from '../pizza-list/pizza-list.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule, PizzaPiecesModule,MatButtonModule, BrowserAnimationsModule, MatDialogModule, MatButtonModule,  MatTooltipModule, PizzaListModule, NavBarModule
  ]
})
export class MainPageModule { }
