import { Component, animate, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  host: {
     '[@routeAnimation]': 'true',
     '[style.display]': "'block'",
    //  '[style.position]': "'absolute'"
   },
  animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate(300)
      ]),
      transition('* => void', animate(300, style({transform: 'translateX(100%)', opacity: 0})))
    ])
  ]

})
export class RecipesComponent{
}
