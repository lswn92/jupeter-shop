import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('단무지', 5),
    new Ingredient('김밥', 3),
    new Ingredient('군만두', 1),
    new Ingredient('물만두', 5),
    new Ingredient('라면스프', 2),
    new Ingredient('짜장소스', 8),
    new Ingredient('양파', 1),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: Ingredient) {
    if(value.name !== null) {
      console.log(value);
      this.ingredients.push(value);
      console.log(this.ingredients);
    }
   }
}
