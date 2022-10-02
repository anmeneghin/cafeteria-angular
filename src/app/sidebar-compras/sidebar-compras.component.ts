import { Component, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar-compras',
  templateUrl: './sidebar-compras.component.html',
  styleUrls: ['./sidebar-compras.component.scss']
})
export class SidebarComprasComponent implements OnInit {

  constructor(public activeOffcanvas: NgbActiveOffcanvas) { }

  ngOnInit(): void {
  }

}
