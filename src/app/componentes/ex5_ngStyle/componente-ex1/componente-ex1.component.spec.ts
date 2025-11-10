import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEx1Component } from './componente-ex1.component';

describe('ComponenteEx1Component', () => {
  let component: ComponenteEx1Component;
  let fixture: ComponentFixture<ComponenteEx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteEx1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
