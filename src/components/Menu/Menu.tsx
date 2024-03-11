import {Button} from "../Button/Button";
import React from "react";

export const Menu = () => {
    return (
        <div className="p-2 flex"
             style={{ backgroundColor: '#F1F1F2' }}
        >

            <Button visible={true} className="bg-blue-600 text-white max-w-24 h-9"
            >
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 6.5h13m-13 5h13m-13 5h13" stroke="#fff" strokeWidth="1.67" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
                Menu
            </Button>
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m25.5 19-6.234 5.963a7.45 7.45 0 0 1-10.418-.116v0a7.45 7.45 0 0 1 .079-10.614l8.046-7.81a5.164 5.164 0 0 1 7.12-.07v0a5.163 5.163 0 0 1 .128 7.426l-7.967 7.967a3.005 3.005 0 0 1-4.371-.128v0a3.005 3.005 0 0 1 .12-4.122L18 11.5"
                    stroke="#8E8E93" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <label htmlFor="search"
                   className="relative flex items-center gap-2 bg-white border border-gray-300 rounded-full p-1 w-[208px] h-[33px]">
                <input id="search" type="text" className="flex-1 outline-none px-2 " placeholder="Message..."/>
                <svg className='absolute top-1 right-2' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M2.835 10.25c0-2.195.945-4.417 2.394-5.885.724-.735 1.551-1.263 2.436-1.518V3.5c0 5.432 4.403 9.835 9.835 9.835h.799c-.195 1.105-.796 2.106-1.677 2.918-1.277 1.178-3.1 1.912-4.945 1.912h-.927a7.915 7.915 0 0 1-7.915-7.915m15.447 1.415c-.313-1.755-1.167-3.37-3.372-5.575-1.73-1.73-3.124-2.644-4.515-3.145a4.6 4.6 0 0 0-1.06-.247V3.5a8.165 8.165 0 0 0 8.165 8.165zm-7.32-10.291C8.305.417 5.806 1.401 4.04 3.192 2.286 4.97 1.165 7.612 1.165 10.25a9.585 9.585 0 0 0 9.585 9.585h.927c2.264 0 4.492-.892 6.077-2.354 1.594-1.47 2.579-3.563 2.204-5.92-.362-2.272-1.436-4.22-3.867-6.651-1.841-1.841-3.436-2.926-5.13-3.536"
                          fill="#8E8E93"/>
                </svg>
            </label>

            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="5" width="9" height="15" rx="4.5" stroke="#8E8E93" strokeWidth="1.67"/>
                <path d="M8 15.5c0 5.522 4.25 8.283 8.5 8.283M25 15.5c0 5.522-4.25 8.283-8.5 8.283m0 0V28"
                      stroke="#8E8E93" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        </div>
    );
};