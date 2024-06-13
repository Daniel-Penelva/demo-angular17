import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableComponente3Component } from './observable-componente3.component';

describe('ObservableComponente3Component', () => {
  let component: ObservableComponente3Component;
  let fixture: ComponentFixture<ObservableComponente3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableComponente3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableComponente3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
