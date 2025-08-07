import {Component, inject} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {rxResource} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard-page',
  imports: [],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {


  customerService = inject(CustomerService);

  customers = rxResource({
    loader: () => this.customerService.getAllCustomers()
  })




}
