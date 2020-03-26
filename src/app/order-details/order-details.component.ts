import { Component, OnInit } from '@angular/core';
import { OrderService, CustomerService, ArticleService } from '../http-client.service';
import { Order, OrderStatus, OrderType} from '../order';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Customer } from '../customer';
import { Article } from '../article';
import { Item } from '../item';
import { Price } from '../price';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order: Order;
  customerList: Customer[];
  articleList: Article[];
  _orderType = Object.values(OrderType);
  _orderStatus = Object.values(OrderStatus);

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private orderService: OrderService,
    private articleService: ArticleService,
    private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.fetchOrder();
    this.fetchCustomer();
    this.fetchArticle();
  }

  fetchOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.get(id).subscribe( order => this.order = order);
  }

  fetchCustomer(): void {
    this.customerService.getAll().subscribe( cc => this.customerList = cc);
  }

  fetchArticle(): void {
    this.articleService.getAll().subscribe( aa => this.articleList = aa);
  }

  getCustomerName(id: number): string {
    if(this.customerList)
      return this.customerList.filter(c=>c.id == id)
      .map(c=>`${c.firstName} ${c.lastName}`).join();
  }

  save(): void {
    this.orderService.put(this.order).subscribe();

    // One to many relationship... should order be appeded or deleted?...
    // let customersToUpdate = this.customerList.filter(c=>c.id === this.order.customerId);
    // customersToUpdate.forEach(c=>{
    //   c.ordersIds
    // })
  }

  goBack(): void {
    this.location.back();
  }

  getMaxItemId(): number {
    return Math.max(...this.order.items.map(i=>i.id));
  }

  addItem(): void {
    const maxId = this.getMaxItemId();
    const newItem = {
      id: maxId+1, 
      price: {
        currency: 'EUR'
      } as Price
    } as Item;
    this.order.items.push(newItem);
  }


}
