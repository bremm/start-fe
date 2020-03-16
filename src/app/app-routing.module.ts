import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


const routes: Routes = [
  { 
    path : "",
    redirectTo: "/customers",
    pathMatch: "full",
  },
  { 
    path : "customers",
    component : CustomerComponent,
  },
  { 
    path : "customers/details/:id",
    component : CustomerDetailsComponent,
  },
  {
    path : "**",
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
