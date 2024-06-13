import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableComponenteComponent } from './observable-componente.component';

describe('ObservableComponenteComponent', () => {
  let component: ObservableComponenteComponent;
  let fixture: ComponentFixture<ObservableComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
