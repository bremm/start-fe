import { Price } from './price'

export class Article {
    id: number;
    name: string;
    description: string;
    supplier: string;
    purchasePrice: Price;
}