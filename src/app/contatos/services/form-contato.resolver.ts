import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FormContatoViewModel } from "../view-model/form-contato.view.model";
import { ContatoService } from "./contato.service";

@Injectable()
export class FormContatoResolver implements Resolve<FormContatoViewModel>{
  constructor(private contatoService: ContatoService){

  }
  resolve(route: ActivatedRouteSnapshot): Observable<FormContatoViewModel>{
    return this.contatoService.selelecionarContatoPorId(route.params['id']);
  }

}