import { Component, OnInit } from '@angular/core';

import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'schnitzel,',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      ingredients:['French fries', 'pork meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti,',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Spaghetti_al_Pomodoro.JPG',
      ingredients:['spaghetti','meat','tomatoes']
    }

  ];


  constructor() { }

  ngOnInit() {
  }

}
