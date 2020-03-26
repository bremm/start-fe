import { Component, OnInit } from '@angular/core';
import { OrderService, CustomerService, ArticleService } from '../http-client.service';
import { Order } from '../order';
import { Item } from '../item';
import { Address } from '../address';
import { Price } from '../price';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orderList: Order[];
  customerNameList: {id: number, name: string}[];
  articleNameList: {id: number, name: string}[];

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private articleService: ArticleService) {
 
  }

  getMaxId(): number {
    return Math.max(... this.orderList.map(o => o.id));
  }

  ngOnInit(): void {   
    this.fetchOrders();
    this.fetchCustomers();
    this.fetchArticle();
  }
  
  fetchOrders(): void {
    this.orderService.getAll().subscribe(
      orders => this.orderList = orders
    );
  }

  fetchCustomers(): void {
    this.customerService.getAll().subscribe(
      customers => this.customerNameList = customers.map(c => {
        return {id: c.id, name: c.firstName+" "+c.lastName}
      })
    );
  }

  fetchArticle(): void {
    this.articleService.getAll().subscribe(
      aa => {
        this.articleNameList = aa.map(a => {
          return {id: a.id, name: a.name};});
      });
  }

  getCustomer(id: number): string {
    if(this.customerNameList)
      for(let c of this.customerNameList)
        if(c.id === id)
          return c.name;
  }

  createOrder(): void {
    const now = new Date();
    const newOrder = {
      id: this.getMaxId()+1,
      date: now.toISOString(),
      items: [
        {
          id: 0,
          price: {currency: 'EUR'} as Price,
        } as Item
      ],
      billingAddress: {} as Address,
      deliveryAddress: {} as Address,
    } as Order;
    this.orderService.post(newOrder).subscribe(
      newOrder => this.orderList.push(newOrder)
    );
  }

  delete(id: number): void {
    this.orderService.delete(id).subscribe(
      _ => this.orderList = this.orderList.filter(o => o.id != id)
    );
  }

  getDate(str: string) {
    const d = new Date(str);
    return d.toLocaleDateString();
  }

}
