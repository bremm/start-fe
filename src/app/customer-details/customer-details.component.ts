import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  private customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.customerService.getCustomer(id).subscribe(
      customer => this.customer = customer
    );
  }

}
