import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceAngularComponent } from './interface-angular.component';

describe('InterfaceAngularComponent', () => {
  let component: InterfaceAngularComponent;
  let fixture: ComponentFixture<InterfaceAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfaceAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
