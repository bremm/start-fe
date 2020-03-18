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

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getAll().subscribe(
      customers => this.customerList = customers
    );
  }

}
