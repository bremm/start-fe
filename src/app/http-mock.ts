import { CustomerService } from "./http-client.service";

export let httpCustomerStub: Partial<CustomerService>;

httpCustomerStub = {
  baseUrl: "/api/customer",
  objName: "customer",
};