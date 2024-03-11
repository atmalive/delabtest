
export const Header = () => {
    return (
        <div className="flex justify-between items-center px-3.5 pt-0 drop-shadow-md rounded-e-2xl" >
            <button className="text-blue-500">Cancel</button>
            <div className='flex flex-col justify-start items-center'>
                <div className="mb-auto text-sm font-semibold leading-5 tracking-tighter text-gray-800">DeWallet</div>
                <span className='text-gray-500 text-xs leading-none'>bot</span>
            </div>
            <button className="text-blue-500">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.8 22c0-5.633 4.567-10.2 10.2-10.2S32.2 16.367 32.2 22 27.633 32.2 22 32.2 11.8 27.633 11.8 22M22 10.2c-6.517 0-11.8 5.283-11.8 11.8S15.483 33.8 22 33.8 33.8 28.517 33.8 22 28.517 10.2 22 10.2m0 13.05a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M18.25 22a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M27 23.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" fill="#007AFF"/></svg>
            </button>
        </div>
    );
};

