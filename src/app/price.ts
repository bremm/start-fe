export enum Currency {
    EURO = "EUR",
    USDOLLAR = "USD",
    POUNDS = "GBP",
    SWISSFRANC = "CHF",
    YEN = "JPY",
}

export interface Price {
    amount: number,
    currency: string,
}