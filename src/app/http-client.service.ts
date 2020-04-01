import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Customer } from './customer';
import { Order } from './order';
import { Article } from './article';


// Handles HTTP requests
// This generic class can be used for all objects 
// eg. Customer, Order, Articles

@Injectable({
  providedIn: 'root'
})
export class HttpClientService<T> {
  baseUrl: string;
  objName: string;

  setObjectName(objectName: string){
    this.objName = objectName.toLowerCase();
    this.baseUrl = "api/" + this.objName;
  }

  getUrl(): string {
    return this.baseUrl;
  }

  constructor(private http: HttpClient) { }


  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl).pipe(
      tap(_ => this.log(`Get all ${this.objName} from ${this.baseUrl}`)),
      catchError(this.handleError<T[]>(`Get all ${this.objName} from ${this.baseUrl}`))
    );
  }

  get(id: number): Observable<T> {
    const url = this.baseUrl + "/" + id;
    return this.http.get<T>(url).pipe(
      tap(_ => this.log(`Get ${this.objName} from ${url}`)),
      catchError(this.handleError<T>(`Get ${this.objName} from ${url}`))
    );
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

  put(newObj: T): Observable<T> {
    return this.http.put<T>(this.baseUrl, newObj, this.httpOptions).pipe(
      tap(_ => {
        this.log(`Put ${this.objName} to ${this.baseUrl}`);
        console.debug(newObj);
        }),
      catchError(this.handleError<T>(`Put ${this.objName} to ${this.baseUrl}`))
    );
  }
  

  post(newObj: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, newObj, this.httpOptions)
      .pipe(
        tap( addedObj => this.log(`Added new ${this.objName} to ${this.baseUrl}`)),
        catchError(this.handleError<T>(`Added new ${this.objName} to ${this.baseUrl}`))
      );
  }


  delete(objId: number) :Observable<T> {
    console.log(objId);
    const url = this.baseUrl+"/"+objId;
    return this.http.delete<T>(url, this.httpOptions)
    .pipe(
      tap( _ => this.log(`Deleted ${this.objName} id ${objId} from ${url}`)),
      catchError(this.handleError<T>(`Deleted ${this.objName} id ${objId} from ${url}`))
    );
  }


  private handleError<T> (operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result);
    };
  }

  private log(msg: string){
    console.log(this.objName+ ": " + msg);
  }
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends HttpClientService<Customer> {
  constructor(http: HttpClient){
    super(http);
    this.setObjectName(Customer.name);
  }
}
@Injectable({
  providedIn: 'root'
})
export class OrderService extends HttpClientService<Order> {
  constructor(http: HttpClient){
    super(http);
    this.setObjectName(Order.name);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends HttpClientService<Article> {
  constructor(http: HttpClient){
    super(http);
    this.setObjectName(Article.name);
  }
}