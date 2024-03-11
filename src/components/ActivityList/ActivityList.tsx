import {FC} from 'react';
import {BalanceItem} from "../BalanceItem/BalanceItem";
import {Transaction} from "../../utils/types";

interface ActivityListProps {
    transactions: Transaction[]
}

export const ActivityList: FC<ActivityListProps> = ({transactions}) => {

    const groupTransactionsByMonth = (transactions: any[]) => {
        return transactions.reduce((acc, transaction) => {
            const month = new Date(transaction.date).toLocaleString('default', { month: 'long' });
            if (!acc[month]) {
                acc[month] = [];
            }
            acc[month].push(transaction);
            return acc;
        }, {});
    };

    const groupedTransactions = groupTransactionsByMonth(transactions);

    return (
        <div className="flex flex-col gap-3 mb-auto min-h-96">
            {Object.keys(groupedTransactions).map((month) => (
                <div  key={month}>
                    <div className='text-black font-semibold text-md mb-2'>{month}</div>
                    {groupedTransactions[month].map((transaction: { name: string; isFrom: boolean; amountUsd: string; bgColor: string; wallet: string; domain: string; date: string; }, index: React.Key | null | undefined) => (
                        <BalanceItem
                            key={index}
                            name={transaction.name}
                            isFrom={transaction.isFrom}
                            amount={transaction.amountUsd}
                            bgColor={transaction.bgColor}
                            wallet={transaction.wallet}
                            domain={transaction.domain}
                            date={transaction.date}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};