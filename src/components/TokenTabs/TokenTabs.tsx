import React, {SetStateAction} from "react";
import {TokenList} from "../TokenList/TokenList";
import {ActivityList} from "../ActivityList/ActivityList";
import {Token, Transaction} from "../../utils/types";

interface TokenTabsProps {
    setIsBalance: (value: boolean) => void;
    isBalance: boolean;
    tokens: Token[];
    transactions: Transaction[];
}

export const TokenTabs: React.FC<TokenTabsProps> = ({setIsBalance, isBalance, tokens, transactions}) => {


    const handleTabClick = (tab: SetStateAction<string>) => {
        setIsBalance(!isBalance);
    }

    return (
        <>
            <div className="flex items-start p-0.5 w-full bg-gray-400 bg-opacity-20 rounded-lg">
                <button
                    className={`flex-1 text-center rounded-lg text-black font-medium p-0.5 shadow-sm ${!isBalance && 'bg-white'}`}
                    onClick={() => handleTabClick('tokens')}
                >
                    Tokens
                </button>
                <button
                    className={`flex-1 text-center rounded-lg p-0.5 font-medium shadow-sm ${isBalance && 'bg-white'}`}
                    onClick={() => handleTabClick('activity')}
                >
                    Activity
                </button>
            </div>
            {!isBalance  && <TokenList tokens={tokens} />}
            {isBalance  && <ActivityList transactions={transactions} />}
        </>
    )
}