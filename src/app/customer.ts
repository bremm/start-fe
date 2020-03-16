import {Address} from "./address"

export interface Customer {
    id: number,
    firstName: string,
    lastName: string,
    phone: string[],
    email: string,
    billingAddress: Address,
    deliveryAddress: Address,
    //orders: Order[],
}