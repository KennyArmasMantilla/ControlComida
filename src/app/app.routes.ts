import {Routes} from '@angular/router';
import {LayoutPageComponent} from './layout-page/layout-page.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {SearchClientComponent} from './pages/search-client/search-client.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardPageComponent,


        title: 'Control de ventas'
      },
      {
        path: 'register',
        loadChildren: () => import('./pages/register-config/register-config.routes'),
      },
      {
        path: 'searchClient',
        component: SearchClientComponent,
        title: 'Busqueda Cliente'
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
