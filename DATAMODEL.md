# Data model

A data model for customers of a fruit shop

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
    Articles: ArticleOrder[],
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
}

Value:
{
    Price: number,
    Currency: string,
}

ArticleOrder{
    ArticleId: number,
    Article: ArticleItem {
        Name: string,
        Description: string,
        Durability: string,
        PurchasingPrice: Value,
        ProductionInfo {
            Supplier: string,
            Origin: Address,
            CreationDate: Date,
        },
    },
    Price: Value,
    Quantity: number,
}


Customer {
    CustomerId: number,
    FirstName: string,
    LastName: string,
    Phone: number[],
    Email: string,
    BillingAddress: Address,
    DeliveryAddress: Address,
    Orders: Order[],
}