import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContatoService } from 'src/app/contatos/services/contato.service';
import { ListarContatoViewModel } from 'src/app/contatos/view-model/ListarContatoViewModel';
import { CompromissoService } from '../services/compromisso.service';
import { FormCompromissoViewModel } from '../view-model/form-compromisso.view.model';
import { TipoLocalCompromissoEnum } from '../view-model/tipo-local-compromisso.enum';

@Component({
  selector: 'app-inserir-compromisso',
  templateUrl: './inserir-compromisso.component.html',
  styles: [
  ]
})
export class InserirCompromissoComponent implements OnInit {

  public formCompromisso : FormGroup;
  public tiposLocais = Object.values(TipoLocalCompromissoEnum)
    .filter(v => !Number.isFinite(v));
  
  public contatos$: Observable<ListarContatoViewModel[]> | any;

  public formCompromissoVM: FormCompromissoViewModel = new FormCompromissoViewModel();
  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService,
    private compromissoService: CompromissoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.contatos$ = this.contatoService.selecionarTodos();

    this.formCompromisso = this.formBuilder.group({
      assunto: ['', [Validators.required, Validators.minLength(3)]],
      tipoLocal: ['', [Validators.required]],
      local: ['', [Validators.required]],
      contatoId: ['', [Validators.required]],
      link: ['', [Validators.required]],
      data: ['', [Validators.required]],
      horaInicio: ['', [Validators.required]],
      horaTermino: ['', [Validators.required]],
    });
  }

  get id() {
    return this.formCompromisso.get('id');
  }
  get assunto() {
    return this.formCompromisso.get('assunto');
  }
  get local() {
    return this.formCompromisso.get('local');
  }
  get tipoLocal() {
    return this.formCompromisso.get('tipoLocal');
  }
  get link() {
    return this.formCompromisso.get('link');
  }
  get data() {
    return this.formCompromisso.get('data');
  }
  get contatoId() {
    return this.formCompromisso.get('contatoId');
  }
  get contato() {
    return this.formCompromisso.get('contato');
  }
  get horaInicio() {
    return this.formCompromisso.get('horaInicio');
  }
  get horaTermino() {
    return this.formCompromisso.get('horaTermino');
  }

  public gravar() {
    if (this.formCompromisso.invalid) return;

    this.formCompromissoVM = Object.assign({}, this.formCompromissoVM, this.formCompromisso.value);

    this.compromissoService.inserir(this.formCompromissoVM)
      .subscribe({
        next: (compromissoInserido) => this.processarSucesso(compromissoInserido),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(compromisso: FormCompromissoViewModel): void {
    this.router.navigate(['/compromissos/listar']);
  }

  private processarFalha(erro: any) {
    if (erro) {
      console.log(erro);
    }
  }

}
