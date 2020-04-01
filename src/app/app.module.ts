import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http' 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomerComponent } from './customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { InMemoryDataService } from './in-memory-data.service';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { InputAddressComponent } from './input-address/input-address.component';
import { InputItemComponent } from './input-item/input-item.component';
import { InputPriceComponent } from './input-price/input-price.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageNotFoundComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    OrdersComponent,
    OrderDetailsComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    InputAddressComponent,
    InputItemComponent,
    InputPriceComponent,
    ModalInfoComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
