import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumeradoresAngularComponent } from './enumeradores-angular.component';

describe('EnumeradoresAngularComponent', () => {
  let component: EnumeradoresAngularComponent;
  let fixture: ComponentFixture<EnumeradoresAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnumeradoresAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnumeradoresAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
