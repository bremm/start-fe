import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { MockOrderList } from '../mock-orders';
import { of } from 'rxjs';
import { HttpClientService } from '../http-client.service';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let httpSpyGetAll: any;

  beforeEach(async(() => {

    const httpSpy = jasmine.createSpyObj('HttpClientService', ['getAll', 'setObjectName']);

    httpSpyGetAll = httpSpy.getAll.and.returnValue( of(MockOrderList) );


    TestBed.configureTestingModule({
      declarations: [ OrdersComponent ],
      providers:  [ {provide: HttpClientService, useValue: httpSpy } ]
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
