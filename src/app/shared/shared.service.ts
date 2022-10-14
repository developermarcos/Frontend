import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { LocalStorageService } from "../auth/services/local-storage.service";

export class SharedService{
  private apiUrl: string = environment.apiUrl;
  constructor(
    caminhoBaseService: string,
    protected http: HttpClient,
    protected localStorageService: LocalStorageService
    ){
    this.apiUrl += caminhoBaseService;
  }
  public obterUrl(metodo: string = ""){
    return this.apiUrl.concat(metodo);
  }
  protected obterHeadersAutorizacao(){
    return{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': `Bearer ${this.localStorageService.obterTokenUsuario()}`
      })
    }
  }
  protected processarDados(resposta: any) {
    if(resposta?.sucesso)
      return resposta.dados;
    else
      return resposta;
  }
  protected processarFalha(resposta: any){
    return throwError(() => new Error(resposta.error.erros[0]));
  }
}