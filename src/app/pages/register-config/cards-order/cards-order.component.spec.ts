import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsOrderComponent } from './cards-order.component';

describe('CardsOrderComponent', () => {
  let component: CardsOrderComponent;
  let fixture: ComponentFixture<CardsOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
