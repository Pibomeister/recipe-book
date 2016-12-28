import { Component, OnInit, animate, state, style, transition, trigger } from '@angular/core';

import { Ingredient } from "../shared";
import { ShoppingListAddComponent } from "./shopping-list-add.component";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: 'shopping-list.component.html',
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
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  selectedItem: Ingredient = null;

  constructor(private sls: ShoppingListService) {}

  ngOnInit() {
    this.items = this.sls.getItems();
  }

  onSelectItem(item: Ingredient) {
    this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null;
  }
}
