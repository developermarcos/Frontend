import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { CompromissoAppComponent } from './compromisso-app.component';
import { InserirCompromissoComponent } from './inserir/inserir-compromisso.component';
import { ListarCompromissoComponent } from './listar/listar-compromisso.component';

const routes: Routes = [
  {
    path:'',
    canActivate:[AuthGuard],
    component: CompromissoAppComponent,
    children:[
      {path:'', redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component: ListarCompromissoComponent},
      {path:'inserir', component: InserirCompromissoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompromissoRoutingModule { }
