import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "../shared/sidenav/sidenav.component";


@Component({
  selector: 'app-layout-page',
  imports: [RouterOutlet, SidenavComponent],
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent { }
