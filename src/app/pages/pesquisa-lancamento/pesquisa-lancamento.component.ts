import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pesquisa-lancamento',
    templateUrl: './pesquisa-lancamento.component.html',
    styleUrls: ['./pesquisa-lancamento.component.scss']
})
export class PesquisaLancamentoComponent implements OnInit {
    saudacao: string;
    cpfCnpjMask = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    pesquisarLancamentoForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
        this.saudacao = this.getSaudacao();
    }

    ngOnInit() {
        this.pesquisarLancamentoForm = this.fb.group({
            numeroLancamento: [null, ''],
            cpfCnpj: [null, ''],
            dataInclusao: [null, ''],

        })
    }

    getSaudacao(): string {
        const hora = new Date().getHours();
        if (hora >= 5 && hora < 12) {
            return 'Bom dia Usuário!';
        } else if (hora >= 12 && hora < 18) {
            return 'Boa tarde Usuário!';
        } else {
            return 'Boa noite Usuário!';
        }
    }

    consultar(): void {
        this.router.navigate(['/lancamento-lista']);
    }

    limparDados(): void {
        // Lógica para limpar os dados do formulário
    }

    novoLancamento(): void {
        // Redirecionar para a página de novo lançamento
    }
}
