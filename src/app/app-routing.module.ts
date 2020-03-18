import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';


const routes: Routes = [
  { 
    path : "",
    redirectTo: "/customer",
    pathMatch: "full",
  },
  { 
    path : "customer",
    component : CustomerComponent,
  },
  { 
    path : "customer/details/:id",
    component : CustomerDetailsComponent,
  },
  { 
    path : "order",
    component : OrdersComponent,
  },
  { 
    path : "order/details/:id",
    component : OrderDetailsComponent,
  },
  { 
    path : "article",
    component : ArticlesComponent,
  },
  { 
    path : "article/details/:id",
    component : ArticleDetailsComponent,
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
