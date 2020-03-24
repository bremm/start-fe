import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Order } from '../order';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { Item } from '../item';

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

  getMaxId(): number {
    return Math.max(... this.orderList.map(o => o.id));
  }

  ngOnInit(): void {
    this.fetchOrders();
  }
  
  fetchOrders(): void {
    this.orderService.getAll().subscribe(
      orders => this.orderList = orders
    );
  }

  createOrder(): void {
    this.orderService.post({
      items: [
        {} as Item
      ],
      billingAddress: {},
      deliveryAddress: {},
    } as Order).subscribe(
      newOrder => this.orderList.push(newOrder)
    );
  }

  delete(id: number): void {
    this.orderService.delete(id).subscribe(
      _ => this.orderList = this.orderList.filter(o => o.id != id)
    );
  }

}
