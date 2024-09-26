import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sector } from './sector.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  sectorUrl : string=`https://localhost:7077/api/Sectors`;

  constructor(private httpClaint : HttpClient) { }

    //Get
    getSector() : Observable<Sector[]>{
      return this.httpClaint.get<Sector[]>(this.sectorUrl);
     }
     //Add
     addSector(data : Sector){
       return this.httpClaint.post(this.sectorUrl,data);
      }
      //Update
      updateSector(id : string,data : Sector){
       return this.httpClaint.put(`${this.sectorUrl}/${id}`,data);
      }
      //delet
      deletSector(id : string){
       return this.httpClaint.delete(`${this.sectorUrl}/${id}`);
      }
}
