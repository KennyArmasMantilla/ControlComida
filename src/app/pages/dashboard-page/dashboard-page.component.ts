import {Component, inject} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {rxResource} from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Customer } from '../../interfaces/customer.interface';

@Component({
  selector: 'app-dashboard-page',
  imports: [],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {

  router = inject(Router);

  customerService = inject(CustomerService);

  customers = rxResource({
    loader: () => this.customerService.getAllCustomers()
  })


goToEditCustomer(customer: Customer) {
  this.router.navigate(['/searchClient'], { state: { customer }});
}



}
