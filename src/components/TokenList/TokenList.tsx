import {TokenItem} from "../TokenItem/TokenItem";
import {FC} from "react";
import {Token} from "../../utils/types";

interface TokenList {
    tokens: Token[]
}

export const TokenList: FC<TokenList> = ({tokens}) => {

    return (
        <div className="flex flex-col gap-3 mb-auto min-h-96">
            {tokens.map((token: { name: string; shortName: string; amountUsd: string; amountToken: string; bgColor: string; wallet: string; date: string; }, index: React.Key | null | undefined) => (
                <TokenItem
                    key={index}
                    name={token.name}
                    shortName={token.shortName}
                    amountUsd={token.amountUsd}
                    amountToken={token.amountToken}
                    bgColor={token.bgColor}
                    wallet={token.wallet}
                    date={token.date}/>
            ))}
        </div>
    );
};