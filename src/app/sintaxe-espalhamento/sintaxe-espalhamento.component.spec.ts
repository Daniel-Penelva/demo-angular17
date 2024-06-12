import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintaxeEspalhamentoComponent } from './SintaxeEspalhamentoComponent';

describe('SintaxeEspalhamentoComponent', () => {
  let component: SintaxeEspalhamentoComponent;
  let fixture: ComponentFixture<SintaxeEspalhamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SintaxeEspalhamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SintaxeEspalhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
