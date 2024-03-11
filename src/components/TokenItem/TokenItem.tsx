import React from 'react';
import {Token, Transaction} from "../../utils/types";




export const TokenItem: React.FC<Token> = ({
                                                        name,
                                                        shortName,
                                                        amountUsd,
                                                        amountToken,
                                                        bgColor,
                                                        wallet,
                                                        date
                                                    }) => {
    const trimmedAddress = wallet; // Здесь вы можете использовать функцию trimAddress

    return (
        <div className={`flex justify-between items-start`}>
            <div className="flex items-center justify-center">
                <div className={`${bgColor} relative p-2 rounded-full mr-2`}>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.831 0H4.173C1.66 0 .07 2.709 1.333 4.899l8.43 14.61a1.43 1.43 0 0 0 2.478 0L20.672 4.9c1.262-2.188-.33-4.9-2.84-4.9zM9.756 15.128 7.92 11.575 3.49 3.653a.774.774 0 0 1 .681-1.157h5.583V15.13zM18.51 3.651l-4.428 7.926-1.836 3.551V2.494h5.583c.612 0 .973.65.68 1.157"
                            fill="#fff"/>
                    </svg>
                </div>
                <div>
                    <div className='text-black font-semibold text-lg'>{amountToken} {shortName}</div>
                    <div className='text-black font-normal text-sm opacity-80'>{name}</div>
                </div>

            </div>
            <div className='text-black font-semibold text-lg'>${amountUsd}</div>
        </div>
    );
 };