import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableComponente2Component } from './observable-componente2.component';

describe('ObservableComponente2Component', () => {
  let component: ObservableComponente2Component;
  let fixture: ComponentFixture<ObservableComponente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableComponente2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableComponente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
