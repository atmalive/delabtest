import React, {useEffect, useState} from 'react';
import './App.css';
import {Menu} from "./components/Menu/Menu";
import {TokenTabs} from "./components/TokenTabs/TokenTabs";
import {ActionButtons} from "./components/ActionButtons/ActionButtons";
import {Balance} from "./components/Balance/Balance";
import {Header} from "./components/Header/Header";
import {Token, Transaction} from "./utils/types";
import {Skeleton} from "./components/Skeleton/Skeleton";

const App = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isBalance, setIsBalance] = useState<boolean>(true);
    const [tokens, setTokens] = useState<Token[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);


    useEffect(() => {
        setTimeout(() => {
            const mockTokens = [
                { name: "Toncoin", shortName: "TON", amountUsd: "720", amountToken: "1,253", bgColor: "bg-blue-200", wallet: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5', date: "2024-09-05T00:00:00Z" },
                { name: "Bitcoin", shortName: "BTC", amountUsd: "100", amountToken: "1,253", bgColor: "bg-yellow-300", wallet: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5', date: "2024-10-14T00:00:00Z" },
                { name: "Tether", shortName: "USDT", amountUsd: "12.43", amountToken: "1,253", bgColor: "bg-green-300", wallet: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5', date: "2024-09-25T00:00:00Z" },
                { name: "Tether", shortName: "USDT", amountUsd: "12.43", amountToken: "1,253", bgColor: "bg-green-300", wallet: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5', date: "2024-10-31T00:00:00Z" },
            ];

            const mockTransactions = [
                { name: "Withdraw", isFrom: true, amount: "-9 TON", bgColor: "bg-red-200", wallet: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5', domain: "", date: "2024-10-31T00:00:00Z" },
                { name: "Deposit", isFrom: false, amount: "+9 TON", bgColor: "bg-green-200", wallet: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5', domain: "patreon.com", date: "2024-10-14T00:00:00Z" },
                { name: "Deposit", isFrom: false, amount: "+9 TON", bgColor: "bg-green-200", wallet: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5', domain: "patreon.com", date: "2024-09-10T00:00:00Z" },
                { name: "Deposit", isFrom: true, amount: "+50 ETH", bgColor: "bg-purple-300", wallet: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5', domain: "", date: "2024-09-05T00:00:00Z" },
            ];

            setTokens(mockTokens);
            setTransactions(mockTransactions);
            setIsLoading(false);
        }, 1000);
    }, []);


    if (isLoading) {
        return <Skeleton/>;
    }


    return (
        <div className="relative max-w-sm mx-auto flex flex-col mt-auto w-full bg-gray-400 bg-opacity-30">
            <div
                className='mt-auto  rounded-tl-xl rounded-tr-xl py-3.5'
                style={{
                    background: 'linear-gradient(180deg, rgba(196, 234, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 0%, rgba(225, 239, 255, 0.5) 60%), white'
                }}
            >
                <Header/>
                <Balance isBalance={isBalance} tokens={tokens}/>
            </div>
            <div  style={{
                background: 'linear-gradient(180deg, rgba(196, 234, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 0%, rgba(225, 239, 255, 0.5) 0%), white'
            }}>
                <div className={`flex flex-col bg-white px-3.5 pt-0 py-5 gap-6 ${isBalance && 'pt-5 rounded-tl-3xl rounded-tr-3xl'}`}>
                    <ActionButtons isBalance={isBalance}/>
                    <TokenTabs setIsBalance={setIsBalance} isBalance={isBalance} tokens={tokens} transactions={transactions}/>
                </div>
            </div>
            <Menu/>
        </div>
    );
};

export default App;