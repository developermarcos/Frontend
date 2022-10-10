import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { InserirTarefaComponent } from './inserir/inserir-tarefa.component';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { TarefaAppComponent } from './tarefa-app.component';

const routes: Routes = [
  {
    path:'', 
    canActivate: [AuthGuard],
    component: TarefaAppComponent,
    children:[
      {path:'', redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component: ListarTarefaComponent},
      {path:'inserir', component: InserirTarefaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefaRoutingModule { }
