import { Component, OnInit } from '@angular/core';
import { Layout } from './layout-routing.service';
import { SidebarService } from './sidebar/sidebar-service/sidebar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sidebarState: any;
  constructor(private layoutService: Layout, private sidebarService: SidebarService) { }

  ngOnInit(): void {
  }
}
