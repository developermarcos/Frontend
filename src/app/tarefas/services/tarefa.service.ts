import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, MonoTypeOperatorFunction, Observable, pipe, throwError } from "rxjs";
import { LocalStorageService } from "src/app/auth/services/local-storage.service";
import { SharedService } from "src/app/shared/shared.service";
import { environment } from "src/environments/environment";
import { FormsTarefaViewModel } from "../view-models/forms-tarefa.view.model";
import { ListarTarefaViewModel } from "../view-models/listar-tarefa.view.models";
import { VisualizarTarefaViewModel } from "../view-models/visualizar-tarefa.view.model";

@Injectable()
export class TarefaService extends SharedService{
  
  constructor(
    http: HttpClient,
    localStorageService: LocalStorageService
  ){
    super("Tarefas/", http, localStorageService)
  }
  public selecionarTodos(): Observable<ListarTarefaViewModel[]>{
    const resposta = this.http
      .get<ListarTarefaViewModel[]>(this.obterUrl(), this.obterHeadersAutorizacao())
      .pipe(map(this.processarDados), catchError(this.processarFalha));
      
    return resposta;
  }
  public inserir(tarefaVM: FormsTarefaViewModel): Observable<FormsTarefaViewModel> {
    const resposta = this.http
      .post<FormsTarefaViewModel>(this.obterUrl(), tarefaVM, this.obterHeadersAutorizacao())
      .pipe(map(this.processarDados), catchError(this.processarFalha));

    return resposta;
  }
  public editar(tarefaFormVM: FormsTarefaViewModel): Observable<FormsTarefaViewModel>  {
    const resposta = this.http
    .put<FormsTarefaViewModel>(this.obterUrl() + tarefaFormVM.id, tarefaFormVM, this.obterHeadersAutorizacao())
    .pipe(map(this.processarDados), catchError(this.processarFalha));

    return resposta;
  }
  public excluir(id: string): Observable<string>{
    const resposta = this.http.delete<string>(this.obterUrl(id), this.obterHeadersAutorizacao())
    .pipe(map(this.processarDados), catchError(this.processarFalha));

    return resposta;
  }
  public selecionarPorId(id: string): Observable<FormsTarefaViewModel>{
    const resposta = this.http.get<FormsTarefaViewModel>(this.obterUrl(id), this.obterHeadersAutorizacao())
    .pipe(map(this.processarDados), catchError(this.processarFalha));

    return resposta;
  }
  public selelecionarTarefaCompletaPorId(id: string): Observable<VisualizarTarefaViewModel>{
    const resposta = this.http.get<VisualizarTarefaViewModel>(this.obterUrl('visualizao-completa/'.concat(id)), this.obterHeadersAutorizacao())
    .pipe(map(this.processarDados), catchError(this.processarFalha));

    return resposta;
  }
}