import { Article } from './article'
import { Currency } from './price'

export const MockArticleList: Article[] = [
    {
        id: 0,
        name: "Banana",
        description: "Yummy yellow fruit",
        supplier: "BananaJoe",
        purchasePrice: { 
            amount: 3, 
            currency: Currency.USDOLLAR 
        },
    },
    {
        id: 1,
        name: "Apple",
        description: "Delicious red fruit",
        supplier: "Elderly Woman",
        purchasePrice: { 
            amount: 1, 
            currency: Currency.EURO 
        },
    },
    {
        id: 2,
        name: "Strawberry",
        description: "Sweet and aphrodizing",
        supplier: "Pickit-Yourself Farm",
        purchasePrice: { 
            amount: 1, 
            currency: Currency.EURO 
        },
    },
    {
        id: 3,
        name: "Pineapple",
        description: "Exotic and hard to peel",
        supplier: "Beach Guy",
        purchasePrice: { 
            amount: 10, 
            currency: Currency.USDOLLAR 
        },
    },
]