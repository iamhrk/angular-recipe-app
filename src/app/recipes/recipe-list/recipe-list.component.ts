import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This some good recipe', 'https://www.maxpixel.net/static/photo/1x/Cuisine-Food-Paneer-Biryani-Food-Photography-Dish-7043064.jpg')
  ];
}
