import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LanguageService } from 'src/app/language-service/language.service';
import { PizzaPiecesComponent } from '../pizza-pieces/pizza-pieces.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  actualLanguageSelected: string = '';
  LANGUAGES = this.languages.LANGUAGES

  constructor(private dialog: MatDialog, public languages: LanguageService) { }

  ngOnInit(): void {
    this.languages.$actualLanguage.subscribe((languageSelected) => {
      this.actualLanguageSelected = languageSelected
    })

  }
  showModal() {
    this.dialog.open(PizzaPiecesComponent);
  }

  ngOnDestroy(): void {
  }
}


