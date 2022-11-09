import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaPiecesModule } from '../pizza-pieces/pizza-pieces.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule, PizzaPiecesModule,MatButtonModule, BrowserAnimationsModule, MatDialogModule, MatButtonModule, MatIconModule, MatMenuModule, FontAwesomeModule, MatTooltipModule
  ]
})
export class MainPageModule { }
