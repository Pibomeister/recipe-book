import { ActivatedRoute, Router } from "@angular/router";
import {
  Component,
  OnDestroy,
  OnInit,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/core';

import { Recipe } from "../recipe";
import { RecipeService } from "../recipe.service";
import { ShoppingListService } from "../../shopping-list";
import { Subscription } from "rxjs/Rx";

@Component({

  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
  host: {
     '[@routeAnimation]': 'true',
      '[style.display]': "'block'",
    //  '[style.position]': "'absolute'"
   },
  animations: [
    trigger('routeAnimation', [
      state('*', style({ opacity: 1})),
      transition('void => *', [
        style({ opacity: 0}),
        animate(300)
      ]),
      transition('* => void', animate(300, style({ opacity: 0})))
    ])
  ]
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private recipeIndex: number;
  private subscription: Subscription;

  constructor(private sls: ShoppingListService,
              private router: Router,
              private route: ActivatedRoute,
              private recipesService: RecipeService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
