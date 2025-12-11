import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentStockViewComponent } from './current-stock-view.component';

describe('CurrentStockViewComponent', () => {
  let component: CurrentStockViewComponent;
  let fixture: ComponentFixture<CurrentStockViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentStockViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentStockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
