import { Component } from 'angular2/core';
import { Meal } from './meal.model'

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
  <div>
    <label>{{ meal.name }}</label>
  </div>
  <div class="meal-details">
  <ul>

    <li>Description: {{ meal.description }}</li>

    <li>Calores: {{ meal.calories }}</li>
  </ul>


  </div>


  `
})

export class MealComponent {
  public meal: Meal;
}
