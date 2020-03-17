# Data model

A data model for customers of a fruit shop

```javascript
Address {
    Country: string,
    PLZ: number,
    State: string,
    City: string,
    Street: string,
    Streetnumber: number,
    Name: string,
}

Order {
    OrderId: number,
    OrderType: ["Rent", "Purchase"],
    Items: Item[],
    OrderStatus: ["Ordered", "Processed", "Pending", "Shipped", "Received"],
    BillingInfo: Billing {
        BillingId: number,
        TotalPrice: Value,
        InvoiceId: number,
    }
    
    DeliveryInfo: Delivery {
        DeliveryService: string,
        TargetDeliveryDate: Date,
        EstimatedDeliveryDate: Date,
        ConfirmedDeliveryData: Date,
    }

    Comments: string,
    
    customerId: number,
    billingAddress: Address,
    deliveryAddress: Address,
}

Value {
    Price: number,
    Currency: string,
}

Item {
    id: number,
    articleId: number 
    price: Value,
    quantity: number,
}


Customer {
    id: number,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    billingAddress: Address,
    deliveryAddress: Address,
}

```