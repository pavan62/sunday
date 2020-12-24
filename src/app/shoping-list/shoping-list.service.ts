import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model'


export class ShopinglistService{
    ingrediantchanged=new EventEmitter<Ingredients[]>();
 private    ingredients:Ingredients[]=[
        new Ingredients('apple',5),
        new Ingredients('Banana',10),
      ];
      getIngredients(){
          return this.ingredients.slice();
      }
      addIngredient(ingredient:Ingredients){
          this.ingredients.push(ingredient);
            this.ingrediantchanged.emit(this.ingredients.slice());

      }
    addIngredients(ingredients:Ingredients[])
     {
      
     this.ingredients.push(...ingredients);
     this.ingrediantchanged.emit(this.ingredients.slice());
    }
}