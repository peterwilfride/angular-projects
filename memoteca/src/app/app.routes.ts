import { Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
    },
    {
        path: 'criar',
        component: CriarPensamentoComponent
    },
    {
        path: 'listar',
        component: ListarPensamentosComponent
    }
];
