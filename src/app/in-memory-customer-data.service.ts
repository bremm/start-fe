import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer } from './customer';
import { MockCustomerList } from './mock-customers';
import { MockOrderList } from './mock-orders';

@Injectable({
  providedIn: 'root'
})
export class InMemoryCustomerDataService implements InMemoryDbService {
  
  constructor() { }
  
  createDb() {
    const customer = MockCustomerList;
    const order = MockOrderList;
    return {customer, order};
  }

  genId(customers: Customer[]): number {
    return customers.length > 0 ?
      Math.max(...customers.map(c => c.id)) + 1 :
      1;
  }
}
