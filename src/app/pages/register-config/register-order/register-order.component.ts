import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { FormUtils } from '../../../utils/form-utils';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../interfaces/customer.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-order',
  imports: [ReactiveFormsModule, CommonModule] ,
  templateUrl: './register-order.component.html',
})
export class RegisterOrderComponent {
  customer: Customer | null = null;

  fb = inject(FormBuilder);
  router = inject(Router)
  customerService = inject(CustomerService);
  formUtils = FormUtils;

  enableFinalNumber = false;


  myform = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastname: ['', [Validators.required, Validators.minLength(3)]],
    location: ['', [Validators.required]],
    phone: ['', []],
    quantity: ['', [Validators.required, Validators.min(1)]],
    initialNumber: ['', [Validators.required]],
    finalNumber: [''],
    reference: [''],
  });

  onSave() {
    if (this.myform.invalid) {
      this.myform.markAllAsTouched();
      return;
    }

    // Construir el objeto Customer
    const formValue = this.myform.value;
    const customer: Customer = {
      name: formValue.name || '',
      lastname: formValue.lastname || '',
      location: formValue.location || '',
      phone: formValue.phone || '',
      quantity: Number(formValue.quantity) || 0,
      chickenRanges: [`${formValue.initialNumber} - ${formValue.finalNumber}` || ''],
      reference: formValue.reference || '',
      createDate: new Date(),
      updateDate: new Date(),
      paidChicken: 0,
      owedChicken: Number(formValue.quantity) || 0,
      collectedChicken: 0,
      remainingChicken: Number(formValue.quantity) || 0,
      history: [
        {
          quantity: Number(formValue.quantity) || 0,
          paidChicken: 0,
          owedChicken: Number(formValue.quantity) || 0,
          collectedChicken: 0,
          remainingChicken: Number(formValue.quantity) || 0,
          updateDate: new Date()
        }
      ]
    };
    this.customer = customer;

    this.customerService.register(customer).subscribe({
      next: (customer) => {
        console.log('Customer registered successfully:', customer);
        this.router.navigateByUrl('/dashboard');
      },
      error: (error) => {
        console.error('Error registering customer:', error);
      }
    });
  }

  onToggleFinalNumber() {
    this.enableFinalNumber = !this.enableFinalNumber;
    const finalNumberControl = this.myform.get('finalNumber');
    if (this.enableFinalNumber) {
      finalNumberControl?.enable();
    } else {
      finalNumberControl?.disable();
    }
  }

}
