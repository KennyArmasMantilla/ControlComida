import { Component, effect, inject, signal } from '@angular/core';
import { Customer } from '../../interfaces/customer.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-search-client',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search-client.component.html',
})
export class SearchClientComponent {

  fb = inject(FormBuilder);
  router = inject(Router);
  customerService = inject(CustomerService);


  myform = this.fb.group({
    name: [''],
    lastname: [''],
    quantity: [''],
    cantidadPagar: ['0'],
    cantidadRecoger: ['0'],
  });

  customer = signal<Customer | null>(null);

  enableFinalNumber = false;

  constructor() {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['customer']) {
      this.customer.set(nav.extras.state['customer'] as Customer);
    }
    this.myform.get('finalNumber')?.disable();
  }

  showCustomer = effect(() => {
    const customer = this.customer();
    if (customer) {
      this.myform.patchValue({
        name: customer.name,
        lastname: customer.lastname,
        quantity: customer.quantity.toString(),

      });
    }
  });

  onToggleFinalNumber() {
    this.enableFinalNumber = !this.enableFinalNumber;
    const finalNumberControl = this.myform.get('finalNumber');
    if (this.enableFinalNumber) {
      finalNumberControl?.enable();
    } else {
      finalNumberControl?.disable();
    }
  }

  onSave() {

    if (this.myform.invalid) {
      this.myform.markAllAsTouched();
      return;
    }


    const formData = this.myform.value;
    const currentCustomer: Customer = this.customer()!;
    if (!currentCustomer) return;

    const customerUpdate: Customer = {
      ...currentCustomer,
      name: formData.name || currentCustomer.name,
      lastname: formData.lastname || currentCustomer.lastname,
      quantity: Number(formData.quantity) || currentCustomer.quantity,
      paidChicken: Number(formData.cantidadPagar) + currentCustomer.paidChicken, //PolladaPaga
      owedChicken: currentCustomer.owedChicken - Number(formData.cantidadPagar), //PolladaDebe
      collectedChicken: Number(formData.cantidadRecoger) + currentCustomer.collectedChicken, //PolladaRecogida
      remainingChicken: currentCustomer.remainingChicken - Number(formData.cantidadRecoger), //PolladaFaltante
      updateDate: new Date(),
      history: [
        ...currentCustomer.history,
        {
          quantity: Number(formData.quantity) || currentCustomer.quantity,
          paidChicken: Number(formData.cantidadPagar) + currentCustomer.paidChicken,
          owedChicken: currentCustomer.owedChicken - Number(formData.cantidadPagar),
          collectedChicken: Number(formData.cantidadRecoger) + currentCustomer.collectedChicken,
          remainingChicken: currentCustomer.remainingChicken + Number(formData.cantidadRecoger),
          updateDate: new Date()
        }
      ]
    };

    this.customerService.update(customerUpdate).subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard');
      },
      error: (error) => {
        // Handle error
      }
    });

  }

}
