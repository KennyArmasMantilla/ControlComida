import {Routes} from '@angular/router';
import {RegisterOrderComponent} from './register-order/register-order.component';
import {LocationComponent} from './location/location.component';
import {CardsOrderComponent} from './cards-order/cards-order.component';

export const registerConfigRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'registerOrder',
        component: RegisterOrderComponent,
        title: 'Registrar Orden',
        data: { description: 'Orden' }
      },
      {
        path: 'location',
        component: LocationComponent,
        title: 'Registro de Lugar',
        data: { description: 'Ubicación' }
      },
      {
        path: 'cardsOrder',
        component: CardsOrderComponent,
        title: 'Registro Inicial de Tarjetas',
        data: { description: 'Tarjetas' }
      }
    ]
  }
];

export default registerConfigRoutes;


