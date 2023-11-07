import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This some good recipe',
      'https://upload.wikimedia.org/wikipedia/commons/0/07/Baby_Potato_Vegetarian_Biryani_Recipe.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Rice', 5)]
      )
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}
