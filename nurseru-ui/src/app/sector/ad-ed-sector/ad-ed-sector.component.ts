import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SectorListComponent } from '../sector-list/sector-list.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Sector } from '../sector.module';
import { SectorService } from '../sector.service';

@Component({
  selector: 'app-ad-ed-sector',
  standalone: true,
  imports: [CommonModule,SectorListComponent,ReactiveFormsModule],
  templateUrl: './ad-ed-sector.component.html',
  styleUrl: './ad-ed-sector.component.css'
})
export class AdEdSectorComponent {
  //يتمرر البيانات من categoru-Liest وتظهر بها
  @Input() category! :Sector;
  @Output() closeModel= new EventEmitter<boolean>;
  
  sectorFormGrup! : FormGroup;

  constructor(private fb : FormBuilder,private sectorService : SectorService){

    this.sectorFormGrup=this.fb.group({
      sectorName:['',[Validators.required,Validators.minLength(4)]]
    });
  }

  //من اجل اخذ القيم وادخالها
addSector(){
  this.category = new Sector(this.sectorFormGrup.value);
  //this.category.categoryId=3;
  this.sectorService.addSector(this.category).subscribe(res => {
    console.log(res);
    //close modale
    this.closeModel.emit(true);
  });
  }

}
