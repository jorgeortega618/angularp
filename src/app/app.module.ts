import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { FooterComponent } from './footer/footer.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent,
    ListadoProductosComponent,
    CrearProductoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
