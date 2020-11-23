import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a desctiption',
      'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg'
    ),
    new Recipe(
      'A second Recipe',
      'This is another description',
      'https://www.easypeasyfoodie.com/wp-content/uploads/2019/05/IMG_5352-5.jpg'
    )
  ];
  constructor() {}

  ngOnInit(): void {}
}
