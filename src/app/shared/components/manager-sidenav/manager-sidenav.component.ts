import { Component } from '@angular/core';
import { SideNavbarData } from './sidevar-data';

@Component({
  selector: 'app-manager-sidenav',
  templateUrl: './manager-sidenav.component.html',
  styleUrls: ['./manager-sidenav.component.scss'],
})
export class ManagerSidenavComponent {
  collapsed = true;
  data = SideNavbarData;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
