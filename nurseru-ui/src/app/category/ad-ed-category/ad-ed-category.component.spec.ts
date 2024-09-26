import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdEdCategoryComponent } from './ad-ed-category.component';

describe('AdEdCategoryComponent', () => {
  let component: AdEdCategoryComponent;
  let fixture: ComponentFixture<AdEdCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdEdCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdEdCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
