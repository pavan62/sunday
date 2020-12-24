import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShopinglistService } from './shoping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
ingredients:Ingredients[]

  constructor(private slService :ShopinglistService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredients();
    this.slService.ingrediantchanged
    .subscribe(
      (ingredients:Ingredients[])=>{
this.ingredients=ingredients;
      }
    )
  }
 
}
