import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableComponente4Component } from './observable-componente4.component';

describe('ObservableComponente4Component', () => {
  let component: ObservableComponente4Component;
  let fixture: ComponentFixture<ObservableComponente4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableComponente4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableComponente4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
