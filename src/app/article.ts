import { Price } from './price'

export interface Article {
    id: number,
    name: string,
    description: string,
    supplier: string,
    purchasePrice: Price,
}