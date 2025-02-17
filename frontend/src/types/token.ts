export interface Token {
    mint: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string;
    tokenPrice: { timestamp: string, price: number }[]
}