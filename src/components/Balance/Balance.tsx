import {trimAddress} from "../../utils/trimAddress";
import {calculateTotalAmountUsd} from "../../utils/calculateTotalAmountUsd";
import {Token} from "../../utils/types";
import {FC} from "react";

interface BalanceProps {
    isBalance: boolean,
    tokens: Token[]
}

export const Balance: FC<BalanceProps> = ({isBalance, tokens}) => {

    const myAddress = trimAddress("3FZbgi29cpjq2GjasdhgfhHuJJnkLtktZc5")
    const totalAmountUsd = calculateTotalAmountUsd(tokens);

    return (
        <div className="p-7 rounded-lg mb-3 text-center min-h-28" >
            {isBalance &&
                <>
                    <div className="text-3xl font-semibold">${totalAmountUsd}</div>
                    <div className="text-gray-500 text-sm">{myAddress}</div>
                </>
            }
        </div>
    )
        ;
};