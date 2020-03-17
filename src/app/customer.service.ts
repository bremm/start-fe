import { Injectable } from '@angular/core';
import { Customer } from './customer'
import { MockCustomerList } from './mock-customers' 
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private customersUrl = "api/customers";
  private customerList: Customer[] = MockCustomerList;

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl).pipe(
      tap(_ => this.log("Get Customers")),
      catchError(this.handleError<Customer[]>("Get Customers"))
    );
  }

  getCustomer(id: number): Observable<Customer> {
    const url = this.customersUrl + "/" + id;
    return this.http.get<Customer>(url).pipe(
      tap(_ => this.log("Get Customer")),
      catchError(this.handleError<Customer>("Get Customer"))
    );
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

  putCustomer(customer: Customer): Observable<Customer> {
    const url = this.customersUrl;
    return this.http.put<Customer>(url, customer, this.httpOptions).pipe(
      tap(_ => this.log("Put Customer")),
      catchError(this.handleError<Customer>("Put Customer"))
    );
  }


  private handleError<T> (operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(msg: string){
    console.log(msg);
  }
}
