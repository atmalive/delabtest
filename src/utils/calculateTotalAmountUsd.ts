import {Token} from "./types";

export const calculateTotalAmountUsd = (tokens: Token[]) => {
    const totalAmountUsd = tokens.reduce((sum, token) => {
        const amountUsd = parseFloat(token.amountUsd.replace(/,/g, ''));
        return sum + amountUsd;
    }, 0);

    return parseFloat(totalAmountUsd.toFixed(2));
}
