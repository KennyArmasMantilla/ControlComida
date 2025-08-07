import { environment } from "../environments/environment";
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../interfaces/customer.interface';


const baseUrl = environment.baseUrl;

@Injectable({providedIn: 'root'})
export  class CustomerService {

  private http =  inject(HttpClient);

  getAllCustomers(){
    return this.http.get<[Customer]>(`${baseUrl}/`);
  }







}

