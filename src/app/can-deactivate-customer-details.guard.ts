import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateCustomerDetailsGuard implements CanDeactivate<CustomerDetailsComponent> {
  canDeactivate(
    component: CustomerDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot)
      : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    return component.canDeactivate();
  }
  
}
