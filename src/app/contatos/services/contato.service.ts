import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { LocalStorageService } from "src/app/auth/services/local-storage.service";
import { SharedService } from "src/app/shared/shared.service";
import { FormContatoViewModel } from "../view-model/form-contato.view.model";
import { ListarContatoViewModel } from "../view-model/ListarContatoViewModel";

@Injectable()
export class ContatoService extends SharedService{
  constructor(
    http: HttpClient,
    localStorageService: LocalStorageService
  ){
    super("Contatos/", http, localStorageService)
  }

  public selecionarTodos(): Observable<ListarContatoViewModel[]>{
    const resposta = this.http
      .get<ListarContatoViewModel[]>(this.obterUrl(), this.obterHeadersAutorizacao())
      .pipe(map(this.processarDados), catchError(this.processarFalha));
      
    return resposta;
  }
  public inserir(contatoVM: FormContatoViewModel): Observable<FormContatoViewModel>{
    const resposta = this.http
      .post<FormContatoViewModel>(this.obterUrl(), contatoVM, this.obterHeadersAutorizacao())
      .pipe(map(this.processarDados), catchError(this.processarFalha));
      
    return resposta;
  }
}