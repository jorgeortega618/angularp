import { Routes } from '@angular/router';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';

export const routes: Routes = [
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'listado-productos', component: ListadoProductosComponent },
  { path: '', redirectTo: '/listado-productos', pathMatch: 'full' }
];
