import React from 'react';
import {Transaction} from "../../utils/types";
import {trimAddress} from "../../utils/trimAddress";
import {formatDate} from "../../utils/formatDate";




export const BalanceItem: React.FC<Transaction> = ({
                                               name,
                                                       isFrom,
                                              amount,
                                               bgColor,
                                               wallet,
                                               domain,
                                               date
                                           }) => {
    const trimmedAddress = trimAddress(wallet); // Здесь вы можете использовать функцию trimAddress
    const formattedDate = formatDate(date);

    return (
        <div className={`flex justify-between items-start`}>
            <div className="flex items-center justify-center">
                <div className={`${bgColor} relative p-2 rounded-full mr-2`}>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.831 0H4.173C1.66 0 .07 2.709 1.333 4.899l8.43 14.61a1.43 1.43 0 0 0 2.478 0L20.672 4.9c1.262-2.188-.33-4.9-2.84-4.9zM9.756 15.128 7.92 11.575 3.49 3.653a.774.774 0 0 1 .681-1.157h5.583V15.13zM18.51 3.651l-4.428 7.926-1.836 3.551V2.494h5.583c.612 0 .973.65.68 1.157"
                            fill="#fff"/>
                    </svg>
                    {isFrom ? <svg className='absolute -bottom-1 -right-1' width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.918 7.132V5.925l-.853.853-1.916 1.916a.082.082 0 1 1-.116-.115l2.91-2.91a.08.08 0 0 1 .115 0l2.909 2.91a.082.082 0 1 1-.116.115L9.935 6.778l-.853-.853v6.711a.082.082 0 1 1-.164 0zM9 17.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
                            fill="#FFB801" stroke="#fff"/>
                    </svg>
                        :
                        <svg className='absolute -bottom-1 -right-1' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M9.082 10.868v1.207l.853-.853 1.916-1.916a.082.082 0 1 1 .116.115l-2.91 2.91a.08.08 0 0 1-.115 0L6.033 9.42a.082.082 0 1 1 .116-.115l1.916 1.916.853.853v-6.71a.082.082 0 1 1 .164 0zM9 .5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"
                        fill="#00B83E" stroke="#fff"/>
                        </svg>}
                </div>
                <div>
                    <div>{name}</div>
                    <div>{isFrom ? 'To' : 'From'} {domain ? domain : trimmedAddress}</div>
                </div>

            </div>
            <div className='flex flex-col justify-center items-end'>
                <div className='text-black font-semibold text-sm'>-9 TON</div>
                <div className='text-black font-normal text-xs opacity-80'>{formattedDate}</div>
            </div>

        </div>
    );
};