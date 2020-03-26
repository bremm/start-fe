import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { Location } from '@angular/common';
import { CustomerService, OrderService, ArticleService } from '../http-client.service';
import { Order } from '../order';
import { Article } from '../article';
import { Item } from '../item';
import { Price } from '../price';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;
  orderList: Order[];
  articleList: Article[];

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private orderService: OrderService,
    private articleService: ArticleService,
    private location: Location) { 
    }

  ngOnInit(): void {
    this.fetchCustomer();
    this.fetchOrder();
    this.fetchArticle();
  }

  fetchCustomer(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.customerService.get(id).subscribe(
      customer => this.customer = customer
    );
  }

  fetchOrder(): void {
    this.orderService.getAll().subscribe(
      oo => this.orderList = oo
    );
  }

  fetchArticle(): void {
    this.articleService.getAll().subscribe(
      aa => this.articleList = aa );
  }

  getOrderString(id: number): string {
    const o = this.orderList.filter(o=> o.id == id)[0];
    return `${this.getDate(o.date)} ${o.items.map(i=>this.getArticleString(i.articleId))} [id:${o.id}]`;
  }

  getArticleString(id: number): string {
    if(this.articleList)
      return `${this.articleList[id].name}`;
  }

  save(): void {
    this.customerService.put(this.customer).subscribe();

    // Sync Customer ID in selected orders
    // Conflicts are not inspected
    this.customer.ordersIds.forEach(
      cOrderId => {
        const orderToUpdate = this.orderList.filter(o => o.id === cOrderId);
        orderToUpdate.forEach(o => {
          o.customerId = this.customer.id;
          this.orderService.put(o).subscribe();
        });
      }
    );

  }

  goBack(): void {
    this.location.back();
  }

  getDate(str: string) {
    const d = new Date(str);
    return d.toLocaleDateString();
  }

  getMaxOrderId(): number {
    if(this.orderList)
      return Math.max(...this.orderList.map(o=>o.id));
  }

  createOrder() {
    const now = new Date();

    const newOrder = {
      id: this.getMaxOrderId()+1,
      customerId: this.customer.id,
      date: now.toISOString(),
      items: [{price: {currency: 'EUR'} as Price } as Item ],
      billingAddress: this.customer.billingAddress,
      deliveryAddress: this.customer.deliveryAddress,
    } as Order;
    this.orderService.post(newOrder).subscribe();
  }

}
