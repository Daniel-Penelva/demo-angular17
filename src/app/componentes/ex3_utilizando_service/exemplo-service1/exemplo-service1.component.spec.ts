import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploService1Component } from './exemplo-service1.component';

describe('ExemploService1Component', () => {
  let component: ExemploService1Component;
  let fixture: ComponentFixture<ExemploService1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploService1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExemploService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
