import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEx2Component } from './componente-ex2.component';

describe('ComponenteEx2Component', () => {
  let component: ComponenteEx2Component;
  let fixture: ComponentFixture<ComponenteEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteEx2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
