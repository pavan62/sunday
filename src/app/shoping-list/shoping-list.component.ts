import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredient.model';
import { ShopinglistService } from './shoping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit,OnDestroy {
ingredients:Ingredients[]
private igchange:Subscription;

  constructor(private slService :ShopinglistService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredients();
    this.igchange=this.slService.ingrediantchanged
    .subscribe(
      (ingredients:Ingredients[])=>{
this.ingredients=ingredients;
      }
    );
  }
 ngOnDestroy(){
   this.igchange.unsubscribe();
 }
 onEditItem(index:number){
this.slService.startededit.next(index);
}
}
