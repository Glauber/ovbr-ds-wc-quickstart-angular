import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'app-lancamento-lista',
  templateUrl: './lancamento-lista.component.html',
  styleUrls: ['./lancamento-lista.component.scss']
})
export class LancamentoListaComponent implements OnInit {
  lancamentos: Lancamento[] = [];
  filteredLancamentos: Lancamento[] = [];
  paginatedLancamentos: Lancamento[] = [];

  cpfCnpjFilter: string = '';
  numeroFilter: string = '';
  dataInclusaoFilter: string = '';
  orgaoFilter: string = '';
  situacaoFilter: string = '';
  objetoFilter: string = '';
  origemDebitoFilter: string = '';
  codigoReceitaFilter: string = '';
  periodoInicialFinalFilter: string = '';

  // Paginação
  itemsPerPage: number = 5;
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Carregar a lista de lançamentos
    this.lancamentos = this.getLancamentos();
    this.saveLancamentosToLocalStorage();
    this.filterLancamentos();
  }

  saveLancamentosToLocalStorage(): void {
    this.lancamentos.forEach(lancamento => {
      localStorage.setItem(`lancamento-${lancamento.numero}`, JSON.stringify(lancamento));
    });
  }

  filterLancamentos(): void {
    this.filteredLancamentos = this.lancamentos.filter(lancamento =>
      lancamento.cpfCnpj.includes(this.cpfCnpjFilter) &&
      lancamento.numero.includes(this.numeroFilter) &&
      lancamento.dataInclusao.includes(this.dataInclusaoFilter) &&
      lancamento.orgao.includes(this.orgaoFilter) &&
      lancamento.situacao.includes(this.situacaoFilter) &&
      lancamento.objeto.includes(this.objetoFilter) &&
      lancamento.origemDebito.includes(this.origemDebitoFilter) &&
      lancamento.codigoReceita.includes(this.codigoReceitaFilter) &&
      lancamento.periodoInicialFinal.includes(this.periodoInicialFinalFilter)
    );

    this.totalPages = Math.ceil(this.filteredLancamentos.length / this.itemsPerPage);
    this.updatePaginatedLancamentos();
  }

  updatePaginatedLancamentos(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedLancamentos = this.filteredLancamentos.slice(start, end);
  }

  setItemsPerPage(items: number): void {
    this.itemsPerPage = items;
    this.currentPage = 1;
    this.filterLancamentos();
  }

  setPage(page: number): void {
    if (page > this.totalPages) {
      this.currentPage = this.totalPages;
    } else if (page < 1) {
      this.currentPage = 1;
    } else {
      this.currentPage = page;
    }
    this.updatePaginatedLancamentos();
  }

  getMin(value1: number, value2: number): number {
    return Math.min(value1, value2);
  }

  verDetalhes(lancamento: Lancamento): void {
    this.router.navigate(['/lancamento', lancamento.numero]);
  }

  getLancamentos(): Lancamento[] {
    return [
      {
        selecionado: false,
        cpfCnpj: '12345678901',
        numero: '0000001',
        dataInclusao: '2024-07-04',
        orgao: '123',
        situacao: '00',
        objeto: '12345678901234',
        origemDebito: '1234/2024',
        codigoReceita: '1234',
        periodoInicialFinal: '01/2024 - 06/2024',
        nome: 'Nome 1',
        email: 'email1@example.com',
        telefone: '999999999',
        endereco: 'Endereço 1',
        bairro: 'Bairro 1',
        cidade: 'Cidade 1',
        uf: 'UF',
        cep: '12345678',
        motivo: 'Data: 14/05/2024 Usuario: 99999999999 IP: 999.99.999.99 LANCAMENTO ALTERADO PELA TRANSACAO: P70017AZ A CONSTITUICAO DEFINITIVA FOI HOMOLOGADA NESTA DATA, APOS EXPIRAR O PRAZO PARA RECURSO.',
        cota: 'Cota 1',
        vencimento: '2024-07-10',
        impostoCorrigido: '1000',
        multa: '100',
        mora: '50',
        valorTotal: '1150'
      },
      {
        selecionado: false,
        cpfCnpj: '98765432100',
        numero: '0000002',
        dataInclusao: '2024-07-05',
        orgao: '124',
        situacao: '01',
        objeto: '12345678901235',
        origemDebito: '1235/2023',
        codigoReceita: '1235',
        periodoInicialFinal: '02/2023 - 07/2023',
        nome: 'Nome 2',
        email: 'email2@example.com',
        telefone: '999999998',
        endereco: 'Endereço 2',
        bairro: 'Bairro 2',
        cidade: 'Cidade 2',
        uf: 'UF',
        cep: '12345678',
        motivo: 'Data: 14/05/2023 Usuario: 99999999998 IP: 999.99.999.98 LANCAMENTO ALTERADO PELA TRANSACAO: P70017AZ A CONSTITUICAO DEFINITIVA FOI HOMOLOGADA NESTA DATA, APOS EXPIRAR O PRAZO PARA RECURSO.',
        cota: 'Cota 2',
        vencimento: '2024-07-11',
        impostoCorrigido: '2000',
        multa: '200',
        mora: '100',
        valorTotal: '2300'
      },
      {
        selecionado: false,
        cpfCnpj: '19283746500',
        numero: '0000003',
        dataInclusao: '2024-07-06',
        orgao: '125',
        situacao: '00',
        objeto: '12345678901236',
        origemDebito: '1236/2022',
        codigoReceita: '1236',
        periodoInicialFinal: '03/2022 - 08/2022',
        nome: 'Nome 3',
        email: 'email3@example.com',
        telefone: '999999997',
        endereco: 'Endereço 3',
        bairro: 'Bairro 3',
        cidade: 'Cidade 3',
        uf: 'UF',
        cep: '12345678',
        motivo: 'Data: 14/05/2022 Usuario: 99999999997 IP: 999.99.999.97 LANCAMENTO ALTERADO PELA TRANSACAO: P70017AZ A CONSTITUICAO DEFINITIVA FOI HOMOLOGADA NESTA DATA, APOS EXPIRAR O PRAZO PARA RECURSO.',
        cota: 'Cota 3',
        vencimento: '2024-07-12',
        impostoCorrigido: '3000',
        multa: '300',
        mora: '150',
        valorTotal: '3450'
      },
      {
        selecionado: false,
        cpfCnpj: '56473829100',
        numero: '0000004',
        dataInclusao: '2024-07-07',
        orgao: '126',
        situacao: '01',
        objeto: '12345678901237',
        origemDebito: '1237/2021',
        codigoReceita: '1237',
        periodoInicialFinal: '04/2021 - 09/2021',
        nome: 'Nome 4',
        email: 'email4@example.com',
        telefone: '999999996',
        endereco: 'Endereço 4',
        bairro: 'Bairro 4',
        cidade: 'Cidade 4',
        uf: 'UF',
        cep: '12345678',
        motivo: 'Data: 14/05/2021 Usuario: 99999999996 IP: 999.99.999.96 LANCAMENTO ALTERADO PELA TRANSACAO: P70017AZ A CONSTITUICAO DEFINITIVA FOI HOMOLOGADA NESTA DATA, APOS EXPIRAR O PRAZO PARA RECURSO.',
        cota: 'Cota 4',
        vencimento: '2024-07-13',
        impostoCorrigido: '4000',
        multa: '400',
        mora: '200',
        valorTotal: '4600'
      },
      {
        selecionado: false,
        cpfCnpj: '01928374600',
        numero: '0000005',
        dataInclusao: '2024-07-08',
        orgao: '127',
        situacao: '00',
        objeto: '12345678901238',
        origemDebito: '1238/2020',
        codigoReceita: '1238',
        periodoInicialFinal: '05/2020 - 10/2020',
        nome: 'Nome 5',
        email: 'email5@example.com',
        telefone: '999999995',
        endereco: 'Endereço 5',
        bairro: 'Bairro 5',
        cidade: 'Cidade 5',
        uf: 'UF',
        cep: '12345678',
        motivo: 'Data: 14/05/2020 Usuario: 99999999995 IP: 999.99.999.95 LANCAMENTO ALTERADO PELA TRANSACAO: P70017AZ A CONSTITUICAO DEFINITIVA FOI HOMOLOGADA NESTA DATA, APOS EXPIRAR O PRAZO PARA RECURSO.',
        cota: 'Cota 5',
        vencimento: '2024-07-14',
        impostoCorrigido: '5000',
        multa: '500',
        mora: '250',
        valorTotal: '5750'
      },
      {
        selecionado: false,
        cpfCnpj: '84736251400',
        numero: '0000006',
        dataInclusao: '2024-07-09',
        orgao: '128',
        situacao: '01',
        objeto: '12345678901239',
        origemDebito: '1239/2024',
        codigoReceita: '1239',
        periodoInicialFinal: '06/2024 - 11/2024',
        nome: 'Nome 6',
        email: 'email6@example.com',
        telefone: '999999994',
        endereco: 'Endereço 6',
        bairro: 'Bairro 6',
        cidade: 'Cidade 6',
        uf: 'UF',
        cep: '12345678',
        motivo: 'Data: 14/05/2024 Usuario: 99999999994 IP: 999.99.999.94 LANCAMENTO ALTERADO PELA TRANSACAO: P70017AZ A CONSTITUICAO DEFINITIVA FOI HOMOLOGADA NESTA DATA, APOS EXPIRAR O PRAZO PARA RECURSO.',
        cota: 'Cota 6',
        vencimento: '2024-07-15',
        impostoCorrigido: '6000',
        multa: '600',
        mora: '300',
        valorTotal: '6900'
      },
      {
        selecionado: false,
        cpfCnpj: '73645192000',
        numero: '0000007',
        dataInclusao: '2024-07-10',
        orgao: '129',
        situacao: '00',
        objeto: '12345678901240',
        origemDebito: '1240/2023',
        codigoReceita: '1240',
        periodoInicialFinal: '07/2023 - 12/2023',
        nome: 'Nome 7',
        email: 'email7@example.com',
        telefone: '999999993',
        endereco: 'Endereço 7',
        bairro: 'Bairro 7',
        cidade: 'Cidade 7',
        uf: 'UF',
        cep: '12345678',
        motivo: 'Data: 14/05/2023 Usuario: 99999999993 IP: 999.99.999.93 LANCAMENTO ALTERADO PELA TRANSACAO: P70017AZ A CONSTITUICAO DEFINITIVA FOI HOMOLOGADA NESTA DATA, APOS EXPIRAR O PRAZO PARA RECURSO.',
        cota: 'Cota 7',
        vencimento: '2024-07-16',
        impostoCorrigido: '7000',
        multa: '700',
        mora: '350',
        valorTotal: '8050'
      },
      {
        selecionado: false,
        cpfCnpj: '92837465100',
        numero: '0000008',
        dataInclusao: '2024-07-11',
        orgao: '130',
        situacao: '01',
        objeto: '12345678901241',
        origemDebito: '1241/2022',
        codigoReceita: '1241',
        periodoInicialFinal: '08/2022 - 01/2023',
        nome: 'Nome 8',
        email: 'email8@example.com',
        telefone: '999999992',
        endereco: 'Endereço 8',
        bairro: 'Bairro 8',
        cidade: 'Cidade 8',
        uf: 'UF',
        cep: '12345678',
        motivo: 'Data: 14/05/2022 Usuario: 99999999992 IP: 999.99.999.92 LANCAMENTO ALTERADO PELA TRANSACAO: P70017AZ A CONSTITUICAO DEFINITIVA FOI HOMOLOGADA NESTA DATA, APOS EXPIRAR O PRAZO PARA RECURSO.',
        cota: 'Cota 8',
        vencimento: '2024-07-17',
        impostoCorrigido: '8000',
        multa: '800',
        mora: '400',
        valorTotal: '9200'
      },
      {
        selecionado: false,
        cpfCnpj: '13579246800',
        numero: '0000009',
        dataInclusao: '2024-07-12',
        orgao: '131',
        situacao: '00',
        objeto: '12345678901242',
        origemDebito: '1242/2021',
        codigoReceita: '1242',
        periodoInicialFinal: '09/2021 - 02/2022',
        nome: 'Nome 9',
        email: 'email9@example.com',
        telefone: '999999991',
        endereco: 'Endereço 9',
        bairro: 'Bairro 9',
        cidade: 'Cidade 9',
        uf: 'UF',
        cep: '12345678',
        motivo: 'Data: 14/05/2021 Usuario: 99999999991 IP: 999.99.999.91 LANCAMENTO ALTERADO PELA TRANSACAO: P70017AZ A CONSTITUICAO DEFINITIVA FOI HOMOLOGADA NESTA DATA, APOS EXPIRAR O PRAZO PARA RECURSO.',
        cota: 'Cota 9',
        vencimento: '2024-07-18',
        impostoCorrigido: '9000',
        multa: '900',
        mora: '450',
        valorTotal: '10350'
      },
      {
        selecionado: false,
        cpfCnpj: '97531864200',
        numero: '0000010',
        dataInclusao: '2024-07-13',
        orgao: '132',
        situacao: '01',
        objeto: '12345678901243',
        origemDebito: '1243/2020',
        codigoReceita: '1243',
        periodoInicialFinal: '10/2020 - 03/2021',
        nome: 'Nome 10',
        email: 'email10@example.com',
        telefone: '999999990',
        endereco: 'Endereço 10',
        bairro: 'Bairro 10',
        cidade: 'Cidade 10',
        uf: 'UF',
        cep: '12345678',
        motivo: 'Data: 14/05/2020 Usuario: 99999999990 IP: 999.99.999.90 LANCAMENTO ALTERADO PELA TRANSACAO: P70017AZ A CONSTITUICAO DEFINITIVA FOI HOMOLOGADA NESTA DATA, APOS EXPIRAR O PRAZO PARA RECURSO.',
        cota: 'Cota 10',
        vencimento: '2024-07-19',
        impostoCorrigido: '10000',
        multa: '1000',
        mora: '500',
        valorTotal: '11500'
      }
    ];
  }

}
