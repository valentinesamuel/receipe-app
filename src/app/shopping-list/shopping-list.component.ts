import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.component';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 12),
    new Ingredient('Tomatoes', 23),
    new Ingredient('Akara', 21),
  ];

  constructor() {}

  ngOnInit(): void {}
}
