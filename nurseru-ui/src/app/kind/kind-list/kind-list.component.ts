import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { AdEdKindComponent } from '../ad-ed-kind/ad-ed-kind.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { KindService } from '../kind.service';
import { Kind } from '../kind-module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kind-list',
  standalone: true,
  imports: [CommonModule,AdEdKindComponent],
  templateUrl: './kind-list.component.html',
  styleUrl: './kind-list.component.css'
})
export class KindListComponent {
   //referens
   modalRef?: BsModalRef;
   constructor(private kindService : KindService ,
     private moduleService :BsModalService ){
      console.log(' this KindListComponent !!!!');
     }

     kindList$! : Observable<Kind[]>;
    ngOnInit(): void {
      this.kindList$ = this.kindService.getKind();
     }
     openModal(template: TemplateRef<void>) {
      this.modalRef = this.moduleService.show(template);
    }
    closeModal() {
      this.moduleService.hide(this.modalRef?.id);
    }

}
