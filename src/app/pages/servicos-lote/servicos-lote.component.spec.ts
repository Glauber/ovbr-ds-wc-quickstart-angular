import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosLoteComponent } from './servicos-lote.component';

describe('ServicosLoteComponent', () => {
  let component: ServicosLoteComponent;
  let fixture: ComponentFixture<ServicosLoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosLoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
