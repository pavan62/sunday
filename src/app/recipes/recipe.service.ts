import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShopinglistService } from '../shoping-list/shoping-list.service';
import {Recipe} from './recipe.model'
@Injectable()
export class RecipeService{
recipeselected= new EventEmitter<Recipe>();
   private recipes:Recipe[]=[
        
        new Recipe('Slow-Roast Gochujang Chicken','This isn’t the crisp-skinned, high-heat-roast chicken you’re probably familiar with.','https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_2560%2Cc_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',[
            new Ingredients('chiken',1)
        ]),
        new Recipe('Chicken Tikka Masala','For this chicken tikka masala recipe, the yogurt helps tenderize the chicken; the garlic, ginger, ...','https://assets.bonappetit.com/photos/5b69f163d3d14670539a2174/1:1/w_2560%2Cc_limit/ba-tikka-masala-2.jpg',[
            new Ingredients('Meat',1)
        ])
      
      ];    
constructor(private slService:ShopinglistService){}
      getRecipes(){
          return this.recipes.slice();
      }
      addtoshoping(ingredients:Ingredients[])
      {
this.slService.addIngredients(ingredients);
      }
}