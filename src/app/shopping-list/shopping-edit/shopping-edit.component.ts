import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shoppingListService : ShoppingListService){}

  @ViewChild('nameInput') nameInput : ElementRef;
  @ViewChild('amountInput') amountInput : ElementRef;

  onAddIngredients(){
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(name, amount)
    this.shoppingListService.addIngredient(newIngredient);
  }
}
