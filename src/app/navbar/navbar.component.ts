import { Component, OnInit, TemplateRef } from '@angular/core';
import { SidebarComprasComponent } from '@app/sidebar-compras/sidebar-compras.component';
import { SidebarComponent } from '@app/sidebar/sidebar.component';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private offcanvasService: NgbOffcanvas) { }

  open() {
    this.offcanvasService.open(SidebarComponent);
  }

  openEnd() {
    this.offcanvasService.open(SidebarComprasComponent, { position: 'end' });
  }

}
