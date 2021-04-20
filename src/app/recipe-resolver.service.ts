import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipes/recipe.modal';
import { DataStorageService } from './shared/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]>{

  constructor(private dataStorage:DataStorageService, private recipeService:RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorage.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
