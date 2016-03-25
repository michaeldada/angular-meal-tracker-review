import { Component } from 'angular2/core';
import { Meal } from './meal.model'

@Component({
    selector: 'details-display',
    inputs: ['meal'],
  template: `
  <div>
    <label>{{ meal.description }}</label>
    <label>{{ meal.calories }}</label>
  </div>

  `
})

export class DetailsComponent {
  public meal: Meal;
}
