import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './shared/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

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
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
