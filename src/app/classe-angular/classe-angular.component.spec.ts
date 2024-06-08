import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseAngularComponent } from './ClasseAngularComponent';

describe('ClasseAngularComponent', () => {
  let component: ClasseAngularComponent;
  let fixture: ComponentFixture<ClasseAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasseAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
