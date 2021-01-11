import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from './recipes/recipe.modal';
import { Ingredient } from './shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}
  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'This is a desctiption',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Dough', 20)]
    ),
    new Recipe(
      'Fried Rice',
      'This is a second description',
      'https://www.easypeasyfoodie.com/wp-content/uploads/2019/05/IMG_5352-5.jpg',
      [new Ingredient('Rice', 1), new Ingredient('Carrot', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
