import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Usuario } from './usuario.model'

/**
 * Componente responsável pelo gerenciamento do formulário de usuário.
 */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  public userForm: FormGroup
  public submittedUsers: Usuario[] = []
  public message: string
  public sobrenome: string
  public messageType: string
  public submitted: boolean = false
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      mobile: [null, Validators.required],
      cpf: [null, Validators.required],
      birthDate: [null, Validators.required],
      password: [null, Validators.required],
      rg: [null, Validators.required],
      address: [null],
      cep: [null],
    })
  }

  /**
   * Manipula o envio do formulário.
   * Verifica se o formulário é válido, adiciona o usuário à lista de submissões, reseta o formulário e exibe a mensagem de sucesso.
   * Caso contrário, exibe a mensagem de formulário inválido.
   */
  onSubmit() {
    if (this.userForm.valid) {
      const user: Usuario = {
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        mobile: this.userForm.value.mobile,
        cpf: this.userForm.value.cpf,
        birthDate: this.userForm.value.birthDate,
        password: this.userForm.value.password,
        rg: this.userForm.value.rg,
        address: this.userForm.value.address,
        cep: this.userForm.value.cep,
      }

      this.submittedUsers.push(user)

      this.resetForm()

      this.showFormSubmitted('Formulário enviado com sucesso!', 'success')
    } else {
      this.userForm.markAllAsTouched()
      this.showFormSubmitted('Formulário inválido!', 'danger')
    }
  }

  /**
   * Reseta os valores do formulário.
   */
  resetForm() {
    this.userForm.reset()

    this.userForm.get('name').reset()
    this.userForm.get('email').reset()
    this.userForm.get('mobile').reset()
    this.userForm.get('cpf').reset()
    this.userForm.get('birthDate').reset()
    this.userForm.get('password').reset()
    this.userForm.get('rg').reset()
    this.userForm.get('address').reset()
    this.userForm.get('cep').reset()
  }

  /**
   * Exibe a mensagem de formulário submetido.
   * @param message A mensagem a ser exibida.
   * @param type O tipo de mensagem.
   */
  showFormSubmitted(message: string, type: string) {
    this.submitted = true
    this.message = message
    this.messageType = type

    setTimeout(() => {
      this.submitted = false
    }, 10000)
  }

  /**
   * Remove um usuário da lista de submissões.
   * @param userName O nome do usuário a ser removido.
   */
  removeUser(userName: string) {
    this.submittedUsers = this.submittedUsers.filter((user) => user.name !== userName)
  }

  /**
   * Manipula o evento de input de um campo.
   * Limpa o valor do campo se estiver vazio.
   * @param fieldName O nome do campo.
   */
  handleInput(fieldName: string) {
    console.log('Input')
    const fieldControl = this.userForm.get(fieldName)

    if (fieldControl?.value?.toString()?.trim() === '') {
      fieldControl?.setValue('')
      fieldControl?.markAsUntouched()
      fieldControl?.markAsPristine()
      fieldControl?.updateValueAndValidity()
    }
  }

  handleBlur() {
    console.log('blur')
  }
  handleChange() {
    console.log('change')
  }
}
