import { Injectable } from '@angular/core';
import { map, tap } from "rxjs/Operators";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes/recipe.modal';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService:RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-recipe-book-1232d-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(
      response => {
        console.log(response);
        
      }
    );
  }

  fetchRecipes() {
  return  this.http.get<Recipe[]>('https://ng-recipe-book-1232d-default-rtdb.firebaseio.com/recipes.json').pipe(map(recipe => {
      return recipe.map(recipe => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : []
        }
      });
      
    }), tap(
      recipe => {
        this.recipeService.setRecipes(recipe)
      }
    ))
  }
 
}
