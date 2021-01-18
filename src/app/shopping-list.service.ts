import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from './shared/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 12),
    new Ingredient('Tomatoes', 23),
  ];
  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded(serviceIngredient: Ingredient) {
    this.ingredients.push(serviceIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
