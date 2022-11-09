import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PizzaPiecesComponent } from '../pizza-pieces/pizza-pieces.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  LANGUAGES: Languages = {
    'ES': {
      top: 'POPULARES',
      deliverText: 'ENVIO GRATUITO!',
      pizzas:
      {
        ['pepprGarlic']: {
          id: 1,
          base: 'tomatoCheese',
          ingre1: 'pepperoni',
          ingre2: 'garlic',
          ingre3: 'pickles',
          ingre4: 'mozzarella',
          description: 'Delicioso peperoni con pan de ajo que hará tu boca agua!',
        },
        ['chicago']: {
          id: 2,
          base: 'tomatoCheese',
          ingre1: 'pepperoni',
          ingre2: 'mozzarella',
          ingre3: 'onions',
          ingre4: '',
          description: 'Hasta a los gangster de Chicago les encanta esta pizza!',
        },
        ['barbecue']: {
          id: 3,
          base: 'tomatoCheese',
          ingre1: 'bbqSauce',
          ingre2: 'onions',
          ingre3: 'chicken',
          ingre4: 'mozzarella',
          description: 'El sabor de la parrilla de cerdo con salsa barbacoa, el sabor perfecto con un pan esponjoso!',
        },
        ['carbnGarlic']: {
          id: 4,
          base: 'tomatoCheese',
          ingre1: 'carbnSauce',
          ingre2: 'garlic',
          ingre3: 'bacon',
          ingre4: 'mozzarella',
          description: 'Sabores italianos con esponjoso pan de ajo, satisfacción garantizada por "nonna"!',
        },
      },
      bttnCreatPizz: 'CREAR PIZZA'
    },
    'US': {
      top: 'POPULARS',
      deliverText: 'FREE DELIVERY!',
      pizzas:
      {
        ['pepprGarlic']: {
          id: 1,
          base: 'tomatoCheese',
          ingre1: 'pepperoni',
          ingre2: 'garlic',
          ingre3: 'pickles',
          ingre4: 'mozzarella',
          description: 'Delicious pepperoni with garlic bread will make your mouth watering!',
        },
        ['chicago']: {
          id: 2,
          base: 'tomatoCheese',
          ingre1: 'pepperoni',
          ingre2: 'mozzarella',
          ingre3: 'onions',
          ingre4: '',
          description: 'Even gangsters of Chicago loves this pizza!',
        },
        ['barbecue']: {
          id: 3,
          base: 'tomatoCheese',
          ingre1: 'bbqSauce',
          ingre2: 'onions',
          ingre3: 'chicken',
          ingre4: 'mozzarella',
          description: 'Taste the grill of pork with barbecue sauce, perfect flavor with a spongy bread!',
        },
        ['carbnGarlic']: {
          id: 4,
          base: 'tomatoCheese',
          ingre1: 'carbnSauce',
          ingre2: 'garlic',
          ingre3: 'bacon',
          ingre4: 'mozzarella',
          description: 'Italian flavours with a spongy garlic bread, truly satisfy verified by a "nonna"!',
        },
      },

      bttnCreatPizz: 'CREATE PIZZA'
    }
  }
  actualLanguage = 'US';
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  language(language: string): void {
    this.actualLanguage = language;
  }
  showModal() {
    this.dialog.open(PizzaPiecesComponent);
  }

}


export interface Pizza {
  id: number;
  base: string;
  ingre1: string;
  ingre2: string;
  ingre3?: string;
  ingre4?: string;
  description: string;
}
export interface Pizzas { [key: string]: Pizza }

export interface Language {
  top: string;
  deliverText: string;
  pizzas: Pizzas,
  bttnCreatPizz: string;
}

export interface Languages { [key: string]: Language }[]

