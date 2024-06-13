import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableComponente5Component } from './observable-componente5.component';

describe('ObservableComponente5Component', () => {
  let component: ObservableComponente5Component;
  let fixture: ComponentFixture<ObservableComponente5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableComponente5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableComponente5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
