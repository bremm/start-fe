import { HttpClientService } from "./http-client.service";
import { Customer } from './customer';

export let httpCustomerStub: Partial<HttpClientService<Customer>>;

httpCustomerStub = {
  baseUrl: "/api/customer",
  objName: "customer",
};