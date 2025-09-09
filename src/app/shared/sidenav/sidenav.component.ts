import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import registerConfigRoutes from '../../pages/register-config/register-config.routes';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-sidenav',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {

  listRegister = false;

  registerRoute =  registerConfigRoutes
    .map( (route) => route.children ?? [] )
    .flat()
    .filter((route) => route && route.path)



  toggleMenu() {
    this.listRegister = !this.listRegister;
  }

}
