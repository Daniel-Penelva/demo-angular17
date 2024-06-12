import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePersonalizadoComponent } from './pipe-personalizado.component';

describe('PipePersonalizadoComponent', () => {
  let component: PipePersonalizadoComponent;
  let fixture: ComponentFixture<PipePersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipePersonalizadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipePersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
