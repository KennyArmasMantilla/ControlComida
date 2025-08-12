import { environment } from "../environments/environment";
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../interfaces/customer.interface';


const baseUrl = environment.baseUrl;

@Injectable({ providedIn: 'root' })
export class CustomerService {

  private http = inject(HttpClient);

  getAllCustomers() {
    return this.http.get<[Customer]>(`${baseUrl}/customers`);
  }

  register(customer: Customer) {
    return this.http.post<Customer>(`${baseUrl}/customers/new`, customer, { headers: { 'Content-Type': 'application/json' } });
  }

  update(customer: Customer) {
    return this.http.put<Customer>(`${baseUrl}/customers/${customer._id}`, customer, { headers: { 'Content-Type': 'application/json' } });
  }

}

