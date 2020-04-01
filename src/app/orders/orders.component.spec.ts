import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { MockOrderList } from '../mock-orders';
import { of } from 'rxjs';
import { OrderService, ArticleService, CustomerService } from '../http-client.service';
import { MockArticleList } from '../mock-articles';
import { MockCustomerList } from '../mock-customers';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async(() => {

    const orderSpy = jasmine.createSpyObj('OrderService', ['getAll']);
    const articleSpy = jasmine.createSpyObj('ArticleService', ['getAll']);
    const customerSpy = jasmine.createSpyObj('ArticleService', ['getAll']);

    orderSpy.getAll.and.returnValue( of(MockOrderList) );
    articleSpy.getAll.and.returnValue( of(MockArticleList) );
    customerSpy.getAll.and.returnValue( of(MockCustomerList) );


    TestBed.configureTestingModule({
      declarations: [ OrdersComponent ],
      providers:  [ {provide: OrderService, useValue: orderSpy }, 
                    {provide: ArticleService, useValue: articleSpy }, 
                    {provide: CustomerService, useValue: customerSpy }, ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
