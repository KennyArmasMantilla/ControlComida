import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "../shared/sidenav/sidenav.component";
import {NavbarComponent} from '../shared/navbar/navbar.component';


@Component({
  selector: 'app-layout-page',
  imports: [RouterOutlet, SidenavComponent, NavbarComponent],
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent { }
