import {
  Component,
  Input,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styles: [`
    .list-group-item{
      margin-top: 1.2em;
    }
     .list-group-item:last-of-type {
      margin-bottom: 0;
    }
  `],
  animations: [
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
  ]
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() recipeId: number;
}
