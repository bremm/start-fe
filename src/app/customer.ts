import {Address} from "./address"

export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    billingAddress: Address;
    deliveryAddress: Address;
    ordersIds: number[];
}