import { Component,  OnDestroy,  OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShopinglistService } from '../shoping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit,OnDestroy {
@ViewChild('f') slForm:NgForm;
  subsciption:Subscription;
editmode=false;
editeditemindex:number;
editeditem:Ingredients;
 constructor(private slService:ShopinglistService) { }

  ngOnInit(): void {
   this.subsciption =this.slService.startededit
    .subscribe(
      (index:number)=>{
        this.editeditemindex=index;
        this.editmode=true;
        this.editeditem=this.slService.getIngredient(index);
        this.slForm.setValue({
          name:this.editeditem.name,
          amount:this.editeditem.amount
        })
      }
    );
  }
  onSubmit(form :NgForm)
{
 const value = form.value;

  
 const newIngredient=new Ingredients(value.name,value.amount)
if(this.editmode){
  this.slService.updateIngredients(this.editeditemindex,newIngredient);
}
else{
  this.slService.addIngredient(newIngredient);
}
this.editmode=false;
form.reset();
}
onclear(){
  this.slForm.reset();
  this.editmode=false;
}
ondelete(){
  this.slService.deleteIngredients(this.editeditemindex);
  this.onclear();
}
ngOnDestroy()
{
  this.subsciption.unsubscribe();
}

}
