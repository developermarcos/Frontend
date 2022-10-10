import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";
import { LocalStorageService } from "src/app/auth/services/local-storage.service";
import { environment } from "src/environments/environment";
import { FormsTarefaViewModel } from "../view-models/forms-tarefa.view.model";
import { ListarTarefaViewModel } from "../view-models/listar-tarefa.view.models";

@Injectable()
export class TarefaService{
  

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ){ }
  public selecionarTodos(): Observable<ListarTarefaViewModel[]>{
    const resposta = this.http
      .get<ListarTarefaViewModel[]>(this.apiUrl+'Tarefas', this.obterHeadersAutorizacao())
      .pipe(map(this.processarDados), catchError(this.processarFalha));
      
    return resposta;
  }
  public inserir(tarefaVM: FormsTarefaViewModel): Observable<FormsTarefaViewModel> {
    const resposta = this.http
      .post<FormsTarefaViewModel>(this.apiUrl + 'Tarefas', tarefaVM, this.obterHeadersAutorizacao())
      .pipe(map(this.processarDados), catchError(this.processarFalha));

    return resposta;
  }

  private obterHeadersAutorizacao(){
    return{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': `Bearer ${this.localStorageService.obterTokenUsuario()}`
      })
    }
  }
  private processarDados(resposta: any) {
    if(resposta.sucesso)
      return resposta.dados;
  }
  private processarFalha(resposta: any){
    return throwError(() => new Error(resposta.error.erros[0]));
  }
}