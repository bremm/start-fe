import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public customerList: Customer[];

  constructor(private customerService: HttpClientService<Customer>) {
    customerService.setObjectName("customer");
  }

  getMaxId(): number {
    return Math.max(... this.customerList.map(o => o.id));
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getAll().subscribe(
      customers => this.customerList = customers
    );
  }

  createCustomer(): void {
    this.customerService.post({
      billingAddress: {}, 
      deliveryAddress: {}, 
      ordersIds: [],
    } as Customer).subscribe(
      newCustomer => this.customerList.push(newCustomer)
    );
  }

  delete(id: number) : void {
    this.customerService.delete(id).subscribe( 
      _ => this.customerList = this.customerList.filter(c => c.id != id))
  }

}
