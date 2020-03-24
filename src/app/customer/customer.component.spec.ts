import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { MockCustomerList } from '../mock-customers';
import { of } from 'rxjs';
import { HttpClientService } from '../http-client.service';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;
  let httpSpyGetAll: any;

  beforeEach(async(() => {

    const httpSpy = jasmine.createSpyObj('HttpClientService', ['getAll', 'setObjectName']);

    httpSpyGetAll = httpSpy.getAll.and.returnValue( of(MockCustomerList) );


    TestBed.configureTestingModule({
      declarations: [ CustomerComponent ],
      providers:  [ {provide: HttpClientService, useValue: httpSpy } ]
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
