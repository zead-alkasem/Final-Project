import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriesListComponent } from '../categories-list/categories-list.component';
import { CategoryService } from '../category.service';
import { Category } from '../category.module';


@Component({
  selector: 'app-ad-ed-category',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,CategoriesListComponent],
  templateUrl: './ad-ed-category.component.html',
  styleUrl: './ad-ed-category.component.css'
})
export class AdEdCategoryComponent {
  //يتمرر البيانات من categoru-Liest وتظهر بها
  @Input() category! : Category;
  @Output() closeModel= new EventEmitter<boolean>;
  
  categoryFormGrup! : FormGroup;
constructor(private fb : FormBuilder,private categoryService : CategoryService){

  this.categoryFormGrup=this.fb.group({
    categoryName:['',[Validators.required,Validators.minLength(5)]]
  });
}
//من اجل اخذ القيم وادخالها
addCategory(){
this.category = new Category(this.categoryFormGrup.value);
//this.category.categoryId=3;
this.categoryService.addCategory(this.category).subscribe(res => {
  console.log(res);
  //close modale
  this.closeModel.emit(true);
});
}


}
