import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kind } from './kind-module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KindService {
  kindUrl : string=`https://localhost:7077/api/Kindes`;

  constructor(private httpClaint : HttpClient) { }
   //Get
   getKind() : Observable<Kind[]>{
    return this.httpClaint.get<Kind[]>(this.kindUrl);
   }
   //Add
   addKind(data : Kind){
     return this.httpClaint.post(this.kindUrl,data);
    }
    //Update
    updateKind(id : string,data : Kind){
     return this.httpClaint.put(`${this.kindUrl}/${id}`,data);
    }
    //delet
    deletKind(id : string){
     return this.httpClaint.delete(`${this.kindUrl}/${id}`);
    }
}
