import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RecipeService } from '../recipe.service';

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
 
}
