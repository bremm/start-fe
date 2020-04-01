import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { MockCustomerList } from '../mock-customers';
import { of } from 'rxjs';
import { CustomerService } from '../http-client.service';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async(() => {

    const httpSpy = jasmine.createSpyObj('CustomerService', ['getAll']);

    httpSpy.getAll.and.returnValue( of(MockCustomerList) );


    TestBed.configureTestingModule({
      declarations: [ CustomerComponent ],
      providers:  [ {provide: CustomerService, useValue: httpSpy } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
