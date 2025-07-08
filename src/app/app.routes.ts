import { Routes } from '@angular/router';
import { ListarFree } from './pages/listar-free/listar-free';
import { AgregarFree } from './pages/agregar-free/agregar-free';
import { EditarFree } from './pages/editar-free/editar-free';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'listar-free',
  },
  {
    path: 'listar-free',
    component: ListarFree,
  },
  {
    path: 'agregar-free',
    component: AgregarFree,
  },
  {
    path: 'editar-free/:id',
    component: EditarFree,
  },
  {
    path: '**',
    redirectTo: 'listar-free',
  },
];
