import { Address } from './address'
import { Item } from './item'

export enum OrderType {
    RENT = "Rent",
    PURCHASE = "Purchase",
}

export enum OrderStatus {
    ORDERED = "Ordered", 
    PROCESSED = "Processed", 
    PENDING = "Pending", 
    SHIPPED = "Shipped", 
    RECEIVED = "Received",
}

export interface Order {
    id: number,
    customerId: number,
    orderType: OrderType,
    date: string,
    items: Item[],
    orderStatus: OrderStatus,
    billingAddress: Address,
    deliveryAddress: Address,
    comments: string,
}