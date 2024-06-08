import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloEntidadesComponent } from './modelo-entidades.component';

describe('ModeloEntidadesComponent', () => {
  let component: ModeloEntidadesComponent;
  let fixture: ComponentFixture<ModeloEntidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloEntidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeloEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
