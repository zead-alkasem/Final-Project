import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KindListComponent } from '../kind-list/kind-list.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Kind } from '../kind-module';
import { KindService } from '../kind.service';

@Component({
  selector: 'app-ad-ed-kind',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,KindListComponent],
  templateUrl: './ad-ed-kind.component.html',
  styleUrl: './ad-ed-kind.component.css'
})
export class AdEdKindComponent {
    //يتمرر البيانات من categoru-Liest وتظهر بها
    @Input() kind! : Kind;
    @Output() closeModel= new EventEmitter<boolean>;
    
    kindFormGrup! : FormGroup;
    constructor(private fb : FormBuilder,private kindService : KindService){
      this.kindFormGrup=this.fb.group({
        kindName:['',[Validators.required,Validators.minLength(5)]],
        categoryId:['',Validators.required],
        sectorId:['',Validators.required]
      });
    }
    //من اجل اخذ القيم وادخالها
 addKind(){
  this.kind = new Kind(this.kindFormGrup.value);
  //this.category.categoryId=3;
  this.kindService.addKind(this.kind).subscribe(res => {
    console.log(res);
    //close modale
    this.closeModel.emit(true);
  });
 }
}
