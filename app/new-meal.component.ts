import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component ({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Create New Meal</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
    <button (click)="addMeal(newName, newDescription, newCalories)" class="btn btn-lg btn-success add-button">Add</button>
  </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement){
    var newMeal: Meal = new Meal(userName.value, userDescription.value, parseInt(userCalories.value));
    this.onSubmitNewMeal.emit(newMeal);
    userName.value = "";
    userDescription.value = "";
    userCalories.value = "";
  }
}
