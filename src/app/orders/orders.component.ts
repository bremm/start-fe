import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Order } from '../order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orderList: Order[];

  constructor(private orderService: HttpClientService<Order>) {
    orderService.setObjectName("order");
  }

  ngOnInit(): void {
    this.fetchOrders();
  }
  
  fetchOrders(): void {
    this.orderService.getAll().subscribe(
      orders => this.orderList = orders
    );
  }

}
