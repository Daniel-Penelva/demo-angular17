import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPaiComponent } from './component-pai.component';

describe('ComponentPaiComponent', () => {
  let component: ComponentPaiComponent;
  let fixture: ComponentFixture<ComponentPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentPaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
