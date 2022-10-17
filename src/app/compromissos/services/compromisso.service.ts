import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { LocalStorageService } from "src/app/auth/services/local-storage.service";
import { SharedService } from "src/app/shared/shared.service";
import { FormCompromissoViewModel } from "../view-model/form-compromisso.view.model";
import { ListarCompromissoViewModel } from "../view-model/listar-compromisso.view.model";

@Injectable()
export class CompromissoService extends SharedService{
  
  constructor(
    http: HttpClient,
    localStorageService: LocalStorageService
  ){
    super("Compromissos/", http, localStorageService)
  }
  public selecionarTodos(): Observable<ListarCompromissoViewModel[]>{
    const resposta = this.http
      .get<ListarCompromissoViewModel[]>(this.obterUrl(), this.obterHeadersAutorizacao())
      .pipe(map(this.processarDados), catchError(this.processarFalha));
      
    return resposta;
  }
  public inserir(formCompromissoVM: FormCompromissoViewModel) : Observable<FormCompromissoViewModel>{
    const resposta = this.http
      .post<FormCompromissoViewModel[]>(this.obterUrl(), formCompromissoVM, this.obterHeadersAutorizacao())
      .pipe(map(this.processarDados), catchError(this.processarFalha));
      
    return resposta;
  }
}