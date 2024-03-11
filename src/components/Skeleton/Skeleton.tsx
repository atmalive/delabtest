import React from 'react';
import {Menu} from "../Menu/Menu";
import {Header} from "../Header/Header";

export const Skeleton = () => {
    return (
        <div className="relative max-w-sm mx-auto flex flex-col bg-gray-400 bg-opacity-30">

            <div className='mt-auto w-full bg-white rounded-tl-xl rounded-tr-xl py-3.5 bg-gradient-to-b from-blue-100 to-blue-50 opacity-50'>
                <Header/>
                <div className="p-7 rounded-lg mb-3 text-center">
                    <div className="w-32 h-8 bg-blue-200 animate-pulse rounded-lg mx-auto"></div>
                    <div className="w-24 h-4 bg-blue-100 animate-pulse rounded-full mx-auto mt-2"></div>
                </div>
            </div>

            {/* Нижний блок скелетона */}
            <div className='flex flex-col bg-white px-3.5 py-5 gap-6 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-b from-blue-50 to-white opacity-50'>
                <div className="flex space-x-2">
                    <div className="flex-1 h-12 bg-blue-200 animate-pulse rounded-full"></div>
                    <div className="flex-1 h-12 bg-blue-200 animate-pulse rounded-full"></div>
                    <div className="flex-1 h-12 bg-blue-200 animate-pulse rounded-full"></div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="flex-1 h-10 bg-gray-200 animate-pulse rounded-lg"></div>
                    <div className="flex-1 h-10 bg-gray-200 animate-pulse rounded-lg"></div>
                </div>
            </div>
            <Menu />
        </div>
    );
}
