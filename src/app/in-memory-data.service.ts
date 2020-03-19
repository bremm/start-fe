import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer } from './customer';
import { MockCustomerList } from './mock-customers';
import { MockOrderList } from './mock-orders';
import { MockArticleList } from './mock-articles';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  constructor() { }
  
  createDb() {
    const customer = MockCustomerList;
    const order = MockOrderList;
    const article = MockArticleList;
    return {customer, order, article};
  }

  genId(customers: Customer[]): number {
    return customers.length > 0 ?
      Math.max(...customers.map(c => c.id)) + 1 :
      1;
  }
}
