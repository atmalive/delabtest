export interface Token {
    name: string;
    shortName: string;
    amountUsd: string;
    amountToken: string;
    bgColor: string;
    wallet: string;
    date: string;
}

export interface Transaction {
    name: string;
    isFrom: boolean;
    amount: string;
    bgColor: string;
    wallet: string;
    domain: string;
    date: string;
}