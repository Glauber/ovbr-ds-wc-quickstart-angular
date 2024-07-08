import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioLancamentoComponent } from './relatorio-lancamento.component';

describe('RelatorioLancamentoComponent', () => {
  let component: RelatorioLancamentoComponent;
  let fixture: ComponentFixture<RelatorioLancamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioLancamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
