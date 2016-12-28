import { Component } from '@angular/core';

@Component({
  selector: 'rb-recipe-start',
  template: `
    <div class="wrapper">
       <h1>Please select a Recipe</h1>
    </div>   
  `,
  styles: [`
    h1{
      width: 100%;
      text-align: center;
    }
    .wrapper{
      display:flex;
      position: relative;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      align-items: center;
      justify: center;
      padding: 30px;
      
    }
    `]
})
export class RecipeStartComponent {
}
