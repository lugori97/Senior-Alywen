import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosCuidadosComponent } from './nuestros-cuidados.component';

describe('NuestrosCuidadosComponent', () => {
  let component: NuestrosCuidadosComponent;
  let fixture: ComponentFixture<NuestrosCuidadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrosCuidadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrosCuidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
