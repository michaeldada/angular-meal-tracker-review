import { Component, EventEmitter } from 'angular2/core';
import {MealListComponent } from './meal-list.component';
import {Meal } from './meal.model'

@Component({
    selector: 'my-app',
    directives: [MealListComponent],
    template: `
      <div class="container">
        <h1>Meal List</h1>
        <meal-list
         [mealList]="meals"
         (onMealSelect)="mealWasSelected($event)">
        </meal-list>
      <div>
    `
})

export class AppComponent {
  public meals:Meal[];
  constructor(){
    this.meals = [
      new Meal("Breakfast", "...", 300),
      new Meal("Lunch", "...", 350),
      new Meal("Dinner", "...", 250)
    ];
  }
  mealWasSelected(clickedMeal:Meal): void {
    console.log(clickedMeal);
  }
}
