import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer } from './customer';
import { MockCustomerList } from './mock-customers';

@Injectable({
  providedIn: 'root'
})
export class InMemoryCustomerDataService implements InMemoryDbService {
  
  constructor() { }
  
  createDb() {
    const customers = MockCustomerList;
    return {customers};
  }

  genId(customers: Customer[]): number {
    return customers.length > 0 ?
      Math.max(...customers.map(c => c.id)) + 1 :
      1;
  }
}
