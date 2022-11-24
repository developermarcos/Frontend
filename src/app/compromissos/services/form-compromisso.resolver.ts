import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FormCompromissoViewModel } from "../view-model/form-compromisso.view.model";
import { CompromissoService } from "./compromisso.service";

@Injectable()
export class FormCompromissoResolver implements Resolve<FormCompromissoViewModel>{
  constructor(private compromissoService: CompromissoService){}
  
  resolve(route: ActivatedRouteSnapshot): Observable<FormCompromissoViewModel>{
    return this.compromissoService.selecionarPorId(route.params['id']);
  }

}