import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import {Meal } from './meal.model'
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriePipe } from './calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <div class="all-meals">
  <select (change)="onChange($event.target.value)"  class="filter">
    <option value="all" selected="selected">Show All</option>
    <option value="unhealthy">Show Unhealthy</option>
    <option value="healthy">Show Healthy</option>
  </select>
    <meal-display *ngFor="#currentMeal of mealList | calorie:filterCalorie"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal" (onMealDetails)="mealDetails($event)">
    </meal-display>
    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
    </edit-meal-details>
    <new-meal (onSubmitNewMeal)='createMeal($event)'></new-meal>
  </div>
  `
})
export class MealListComponent {
  public mealList:Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal:Meal;
  public filterCalorie: string = "all";
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal:Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal): void {
    this.mealList.push(
      newMeal
    );
  }
  onChange(filterOption) {
    this.filterCalorie = filterOption;
    console.log(this.filterCalorie);
  }

}
