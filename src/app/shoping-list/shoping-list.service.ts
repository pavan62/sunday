import { findReadVarNames } from '@angular/compiler/src/output/output_ast';

import { Ingredients } from '../shared/ingredient.model'
import {Subject} from 'rxjs';

export class ShopinglistService{
    ingrediantchanged=new Subject<Ingredients[]>();
    startededit= new Subject<number>();
 private    ingredients:Ingredients[]=[
        new Ingredients('apple',5),
        new Ingredients('Banana',10),
      ];
      getIngredients(){
          return this.ingredients.slice();
      }
      getIngredient(index:number){
          return this.ingredients[index];
      }
      addIngredient(ingredient:Ingredients){
          this.ingredients.push(ingredient);
            this.ingrediantchanged.next(this.ingredients.slice());

      }
      
    addIngredients(ingredients:Ingredients[])
     {
      
     this.ingredients.push(...ingredients);
     this.ingrediantchanged.next(this.ingredients.slice());
    }
    updateIngredients(index :number,newIngredients:Ingredients)
    {
this.ingredients[index]=newIngredients;
this.ingrediantchanged.next(this.ingredients.slice());
    }
    deleteIngredients(index:number)
    {
this.ingredients.splice(index,1);
this.ingrediantchanged.next(this.ingredients.slice());
    }
}