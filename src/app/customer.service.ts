import { Injectable } from '@angular/core';
import { Customer } from './customer'
import { MockCustomerList } from './mock-customers' 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerList: Customer[] = MockCustomerList;

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of<Customer[]>(this.customerList);
  }

  getCustomer(id: number): Observable<Customer> {
    for(let element of this.customerList){
      if(element.id === id){
        return of<Customer>(element);
      }
    }
    throw new RangeError("Customer id not found");
  }

  setCustomer(customer: Customer): Observable<Customer> {
    for(let element of this.customerList){
      if(element.id === customer.id){
        element = customer;
        return of<Customer>(element);
      }
    }
    throw new RangeError("Customer id not found");
  }

  
}
