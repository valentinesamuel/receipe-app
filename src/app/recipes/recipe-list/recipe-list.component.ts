import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a desctiption',
      'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg'
    ),
    new Recipe(
      'A second Recipe',
      'This is a second description',
      'https://www.easypeasyfoodie.com/wp-content/uploads/2019/05/IMG_5352-5.jpg'
    ),
    new Recipe(
      'A third Recipe',
      'Created by me',
      'https://images.unsplash.com/photo-1606150653310-c285a8829d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    ),
    new Recipe(
      'A third Recipe',
      'Created by me',
      'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?cs=srgb&dl=pexels-pixabay-33783.jpg&fm=jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
   }
}
