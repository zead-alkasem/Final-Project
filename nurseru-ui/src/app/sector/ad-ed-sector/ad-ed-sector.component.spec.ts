import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdEdSectorComponent } from './ad-ed-sector.component';

describe('AdEdSectorComponent', () => {
  let component: AdEdSectorComponent;
  let fixture: ComponentFixture<AdEdSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdEdSectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdEdSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
