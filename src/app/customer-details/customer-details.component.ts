import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location) { }

  ngOnInit(): void {
    this.fetchCustomer();
  }

  fetchCustomer(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.customerService.getCustomer(id).subscribe(
      customer => this.customer = customer
    );
  }

  save(): void {
    this.customerService.putCustomer(this.customer).subscribe(
      c => this.customer = c
    );
  }

  goBack(): void {
    this.location.back();
  }

}
