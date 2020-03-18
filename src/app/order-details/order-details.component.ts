import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Order, OrderStatus, OrderType} from '../order';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order: Order;
  _orderType = Object.values(OrderType);

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private orderService: HttpClientService<Order>) { 
    this.orderService.setObjectName("Order");

  }

  ngOnInit(): void {
    this.fetchOrder();
  }

  fetchOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.get(id).subscribe( order => this.order = order);
  }


  save(): void {
    this.orderService.put(this.order).subscribe(
      o => this.order = o
    );
  }

  goBack(): void {
    this.location.back();
  }

  onOrderTypeChange(newValue) {
    console.warn(newValue);
    if (this.order.orderType !== newValue) {
      this.order.orderType = newValue;
    }
  }

}
