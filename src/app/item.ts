import { Price } from './price'

export interface Item {
    id: number,
    articleId: number,
    price: Price,
    quantity: number,
}