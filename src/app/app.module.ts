import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { HomeComponent } from '@app/home/home.component';
import { CafesComponent } from '@app/cafes/cafes.component';
import { NgbModule, NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarComprasComponent } from './sidebar-compras/sidebar-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CafesComponent,
    SidebarComponent,
    SidebarComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
