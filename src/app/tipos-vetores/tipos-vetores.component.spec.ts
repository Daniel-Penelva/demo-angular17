import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposVetoresComponent } from './tipos-vetores.component';

describe('TiposVetoresComponent', () => {
  let component: TiposVetoresComponent;
  let fixture: ComponentFixture<TiposVetoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiposVetoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiposVetoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
