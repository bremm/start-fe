import { CustomerService } from "./http-client.service";
import { Customer } from './customer';

export let httpCustomerStub: Partial<CustomerService>;

httpCustomerStub = {
  baseUrl: "/api/customer",
  objName: "customer",
};