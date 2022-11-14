import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Pizza } from '../components/pizza-list/pizza-list.component';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  LANGUAGES: Languages = {
    'ES': {
      top: 'POPULARES',
      deliverText: 'ENVIO GRATUITO!',
      pizzas:
        [
          {
            id: 1,
            name: 'Pepperoni con pan de ajo',
            base: 'tomatoCheese',
            ingre1: 'pepperoni',
            ingre2: 'garlic',
            ingre3: 'pickles',
            ingre4: 'mozzarella',
            description: 'Delicioso peperoni con pan de ajo que hará tu boca agua!',
            picture: 'assets/images/pepperoni-garlic-bread-pizza.png',
            price: 7.99,
          },
          {
            id: 2,
            name: 'Chicago',
            base: 'tomatoCheese',
            ingre1: 'pepperoni',
            ingre2: 'mozzarella',
            ingre3: 'onions',
            ingre4: '',
            price: 7.99,
            description: 'Hasta a los gangster de Chicago les encanta esta pizza!',
            picture: 'assets/images/chicago-pizza.png',
          },
          {
            id: 3,
            name: 'Barbacoa',
            base: 'tomatoCheese',
            ingre1: 'bbqSauce',
            ingre2: 'onions',
            ingre3: 'chicken',
            ingre4: 'mozzarella',
            price: 7.99,
            description: 'El sabor de la parrilla de cerdo con salsa barbacoa, el sabor perfecto con un pan esponjoso!',
            picture: 'assets/images/barbecue.png',
          },
          {
            id: 4,
            name: 'Carbonara con pan de ajo',
            base: 'tomatoCheese',
            ingre1: 'carbnSauce',
            ingre2: 'garlic',
            ingre3: 'bacon',
            ingre4: 'mozzarella',
            price: 7.99,
            description: 'Sabores italianos con esponjoso pan de ajo, satisfacción garantizada por "nonna"!',
            picture: 'assets/images/carbonara-garlic-bread.png',
          },
        ],
      bttnCreatPizz: 'CREAR PIZZA',
      cart: {
        name: 'Carrito'
      },
      buyButton: 'AÑADIR AL CARRITO',
      cartAdded: 'Añadido al carrito!'
    },
    'US': {
      top: 'POPULARS',
      deliverText: 'FREE DELIVERY!',
      pizzas:
        [
          {
            id: 1,
            name: 'Pepperoni Garlic',
            base: 'tomatoCheese',
            ingre1: 'pepperoni',
            ingre2: 'garlic',
            ingre3: 'pickles',
            ingre4: 'mozzarella',
            price: 7.99,
            description: 'Delicious pepperoni with garlic bread will make your mouth watering!',
            picture: 'assets/images/pepperoni-garlic-bread-pizza.png',
          },
          {
            id: 2,
            name: 'Chicago',
            base: 'tomatoCheese',
            ingre1: 'pepperoni',
            ingre2: 'mozzarella',
            ingre3: 'onions',
            ingre4: '',
            price: 7.99,
            description: 'Even gangsters of Chicago loves this pizza!',
            picture: 'assets/images/chicago-pizza.png',
          },
          {
            id: 3,
            name: 'Barbacue',
            base: 'tomatoCheese',
            ingre1: 'bbqSauce',
            ingre2: 'onions',
            ingre3: 'chicken',
            ingre4: 'mozzarella',
            price: 7.99,
            description: 'Taste the grill of pork with barbecue sauce, perfect flavor with a spongy bread!',
            picture: 'assets/images/barbecue.png',
          },
          {
            id: 4,
            name: 'Carbonara Garlic',
            base: 'tomatoCheese',
            ingre1: 'carbnSauce',
            ingre2: 'garlic',
            ingre3: 'bacon',
            ingre4: 'mozzarella',
            price: 7.99,
            description: 'Italian flavours with a spongy garlic bread, truly satisfy verified by a "nonna"!',
            picture: 'assets/images/carbonara-garlic-bread.png',
          },
        ],
      bttnCreatPizz: 'CREATE PIZZA',
      cart: {
        name: 'Cart'
      },
      buyButton: 'ADD TO CART',
      cartAdded: 'Added to cart!'
    }
  }
  constructor() { }
  language: string = 'US';
  $actualLanguage: Subject<string> = new BehaviorSubject(this.language);

  languageChange(language: string): void {
    this.$actualLanguage.next(language)
  }

}
export interface Language {
  top: string;
  deliverText: string;
  pizzas: Pizza[],
  bttnCreatPizz: string;
  buyButton: string;
  cartAdded: string;
  cart: {
    name: string;
  }
}

export interface Languages { [key: string]: Language }[]
