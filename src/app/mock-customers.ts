import {Customer} from "./customer"

export const MockCustomerList: Customer[] = [
    {
        id: 0,
        firstName: "Albert",
        lastName: "Peterson",
        phone: "0176480828",
        email: "albert@peterson.de",
        billingAddress: {
            countryCode: "DEU",
            zipCode: 80339,
            state: "Bayern",
            city: "München",
            street: "Sonnenstraße",
            houseNumber: 1,
            name: "Albert Peterson",
        },
        deliveryAddress: {
            countryCode: "DEU",
            zipCode: 80339,
            state: "Bayern",
            city: "München",
            street: "Sonnenstraße",
            houseNumber: 1,
            name: "Albert Peterson",
        },
    },
    {
        id: 1,
        firstName: "Max",
        lastName: "Mustermann",
        phone: "0165000000",
        email: "max@mustermann.de",
        billingAddress: {
            countryCode: "DEU",
            zipCode: 80339,
            state: "Bayern",
            city: "München",
            street: "Sonnenstraße",
            houseNumber: 2,
            name: "Max Mustermann",
        },
        deliveryAddress: {
            countryCode: "DEU",
            zipCode: 80339,
            state: "Bayern",
            city: "München",
            street: "Sonnenstraße",
            houseNumber: 2,
            name: "Max Mustermann",
        },
    },
]