import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { DropdownDirective } from "./dropdown.directive";
import { HeaderComponent } from "./header.component";
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RecipeBookAppComponent } from "./recipe-book.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeService } from "./recipes/recipe.service";
import { RecipeStartComponent } from "./recipes/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    RecipeBookAppComponent,
    HeaderComponent,
    DropdownDirective,
    ShoppingListAddComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
