import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calorie",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCalorieState = args[0];
    if(desiredCalorieState === "unhealthy") {
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else if (desiredCalorieState === "healthy") {
      return input.filter((meal) => {
        return meal.calories < 300;
      });
    } else {
      return input;
    }
  }
}
