import { Component, OnInit, TemplateRef } from '@angular/core';
import { CategoryService } from '../category.service';
import { Observable } from 'rxjs';
import { Category } from '../category.module';
import { CommonModule } from '@angular/common';
import { BsModalService ,BsModalRef} from 'ngx-bootstrap/modal';
import { AdEdCategoryComponent } from '../ad-ed-category/ad-ed-category.component';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CommonModule,AdEdCategoryComponent],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css'
})
export class CategoriesListComponent implements OnInit{
  //referens
  modalRef?: BsModalRef;
  constructor(private categoryService :CategoryService,
   private modalService : BsModalService 
  ){
    console.log(' this CategoriesListComponent');
  }

    categoryList$! : Observable<Category[]>;
    ngOnInit(): void {
      this.categoryList$ = this.categoryService.getCategory();
     }
     openModal(template: TemplateRef<void>) {
      this.modalRef = this.modalService.show(template);
    }
    closeModal() {
      this.modalService.hide(this.modalRef?.id);
    }

}
