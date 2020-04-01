
import { HttpClientService } from './http-client.service';
import {Customer} from './customer'
import { MockCustomerList } from './mock-customers';
import { of } from 'rxjs';



describe('HttpClientService', () => {

  let customerService: HttpClientService<Customer>
      
  let httpClientSpy: { get: jasmine.Spy };


  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'put']);
    customerService = new HttpClientService<Customer>(<any> httpClientSpy);
  });

  it('Should get MockCustomerList', () => {
    // Mock Http Client
    let expectedCustomers: Customer[] = MockCustomerList;
    expectedCustomers[0].firstName = "alli";  // <-- should make test fail
    httpClientSpy.get.and.returnValue(of(expectedCustomers));

    customerService.getAll().subscribe(
      customers => expect(customers).toEqual(MockCustomerList, 'expected customers'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });


  // it('should return an error when the server returns a 404', () => {
  //   // Mock 404 return
  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404, statusText: 'Not Found'
  //   });

  //   httpClientSpy.get.and.returnValue(defer(() => Promise.reject(errorResponse)));

  //   customerService.getAll().subscribe(
  //     customers => {fail('expected an error, not customers'); },
  //     error => expect(error.message).toContain('test 404 error')
  //   );
  // });

});
