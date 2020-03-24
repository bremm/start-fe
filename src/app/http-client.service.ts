import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

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
      tap(_ => this.log("Get all " + this.objName)),
      catchError(this.handleError<T[]>("Get all " + this.objName))
    );
  }

  get(id: number): Observable<T> {
    const url = this.baseUrl + "/" + id;
    return this.http.get<T>(url).pipe(
      tap(_ => this.log("Get " + this.objName)),
      catchError(this.handleError<T>("Get " + this.objName))
    );
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

  put(newObj: T): Observable<T> {
    return this.http.put<T>(this.baseUrl, newObj, this.httpOptions).pipe(
      tap(_ => this.log("Put " + this.objName)),
      catchError(this.handleError<T>("Put " + this.objName))
    );
  }
  

  post(newObj: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, newObj, this.httpOptions)
      .pipe(
        tap( addedObj => this.log(`Added new ${this.objName}`)),
        catchError(this.handleError<T>(`Added ${this.objName}`))
      );
  }


  delete(objId: number) :Observable<T> {
    console.log(objId);
    const url = this.baseUrl+"/"+objId;
    return this.http.delete<T>(url, this.httpOptions)
    .pipe(
      tap( _ => this.log(`Deleted ${this.objName} id ${objId}`)),
      catchError(this.handleError<T>(`Delete ${this.objName}`))
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
    console.log(this.objName+ ": " + msg);
  }
}
