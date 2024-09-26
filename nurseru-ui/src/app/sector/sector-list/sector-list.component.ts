import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SectorService } from '../sector.service';
import { AdEdSectorComponent } from '../ad-ed-sector/ad-ed-sector.component';
import { Sector } from '../sector.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sector-list',
  standalone: true,
  imports: [CommonModule,AdEdSectorComponent],
  templateUrl: './sector-list.component.html',
  styleUrl: './sector-list.component.css'
})
export class SectorListComponent {
    //referens
    modalRef?: BsModalRef;
    constructor(private sectorService :SectorService,
      private modalService : BsModalService ){
        console.log(' this ServiceListComponent');
      }
      sectorList$! : Observable<Sector[]>;
      ngOnInit(): void {
        this.sectorList$ = this.sectorService.getSector();
       }
       openModal(template: TemplateRef<void>) {
        this.modalRef = this.modalService.show(template);
      }
      closeModal() {
        this.modalService.hide(this.modalRef?.id);
      }

}
