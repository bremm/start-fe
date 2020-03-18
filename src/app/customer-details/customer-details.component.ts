import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { Location } from '@angular/common';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private customerService: HttpClientService<Customer>,
    private location: Location) { 
      this.customerService.setObjectName("customer")
    }

  ngOnInit(): void {
    this.fetchCustomer();
  }

  fetchCustomer(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.customerService.get(id).subscribe(
      customer => this.customer = customer
    );
  }

  save(): void {
    this.customerService.put(this.customer).subscribe(
      c => this.customer = c
    );
  }

  goBack(): void {
    this.location.back();
  }

}
