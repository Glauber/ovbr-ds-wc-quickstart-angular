import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Lancamento {
  selecionado: boolean;
  cpfCnpj: string;
  numero: string;
  dataInclusao: string;
  orgao: string;
  situacao: string;
  objeto: string;
  origemDebito: string;
  codigoReceita: string;
  periodoInicialFinal: string;
  nome?: string;
  email?: string;
  telefone?: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
  cep?: string;
  motivo?: string;
  cota?: string;
  vencimento?: string;
  impostoCorrigido?: string;
  multa?: string;
  mora?: string;
  valorTotal?: string;
}

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.scss']
})
export class LancamentoComponent implements OnInit {
  lancamento: Lancamento | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const numero = this.route.snapshot.paramMap.get('id');
    if (numero) {
      const lancamentoData = localStorage.getItem(`lancamento-${numero}`);
      if (lancamentoData) {
        this.lancamento = JSON.parse(lancamentoData);
      }
    }
  }
}
