# Data model

A data model for customers of a fruit shop

```javascript
Address {
    country: string,
    zipCode: number,
    state: string,
    city: string,
    street: string,
    houseNumber: number,
    recipient: string,
}

Price {
    amount: number,
    currency: string,
}

Order {
    orderId: number,
    customerId: number,
    orderType: ["Rent", "Purchase"],
    date: Date,
    items: Item[],
    orderStatus: ["Ordered", "Processed", "Pending", "Shipped", "Received"],
    billingAddress: Address,
    deliveryAddress: Address,
    comments: string,
}

Item {
    id: number,
    articleId: number 
    price: Price,
    quantity: number,
}

Article {
    id: number,
    name: string,
    description: string,
    supplier: string,
    purchasePrice: Price,
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