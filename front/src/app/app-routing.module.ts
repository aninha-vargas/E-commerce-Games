import { SobreComponent } from './sobre/sobre.component';
import { EditarComponent } from './cadastros/games/editar.component';
import { ExcluirComponent } from './cadastros/games/excluir.component';
import { IncluirComponent } from './cadastros/games/incluir.component';
import { ListarComponent } from './cadastros/games/listar.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent,
    children: [
      { path: "games/editar/:id", component: EditarComponent },
    ],
  },
  { path: "cadastros", component: CadastrosComponent,
      children : [
        { path: "games", component: ListarComponent },
        { path: "games/incluir", component: IncluirComponent },
        { path: "games/excluir/:id", component: ExcluirComponent },
        { path: "games/editar/:id", component: EditarComponent },
      ]
  },
  { path: "sobre", component: SobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
