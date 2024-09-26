import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KindListComponent } from './kind-list.component';

describe('KindListComponent', () => {
  let component: KindListComponent;
  let fixture: ComponentFixture<KindListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KindListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KindListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
