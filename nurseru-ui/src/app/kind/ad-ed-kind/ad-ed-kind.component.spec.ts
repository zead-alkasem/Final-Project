import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdEdKindComponent } from './ad-ed-kind.component';

describe('AdEdKindComponent', () => {
  let component: AdEdKindComponent;
  let fixture: ComponentFixture<AdEdKindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdEdKindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdEdKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
