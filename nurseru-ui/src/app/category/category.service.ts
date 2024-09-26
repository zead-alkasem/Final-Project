import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.module';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
categoryUrl : string=`https://localhost:7077/api/Categories`;
  constructor(private httpClaint : HttpClient) { }
  //Get
  getCategory() : Observable<Category[]>{
   return this.httpClaint.get<Category[]>(this.categoryUrl);
  }
  //Add
  addCategory(data : Category){
    return this.httpClaint.post(this.categoryUrl,data);
   }
   //Update
   updateCategory(id : string,data : Category){
    return this.httpClaint.put(`${this.categoryUrl}/${id}`,data);
   }
   //delet
   deletCategory(id : string){
    return this.httpClaint.delete(`${this.categoryUrl}/${id}`);
   }
   


}
