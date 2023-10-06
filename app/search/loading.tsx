import React from "react";
import Header from "./components/Header";
import SearchSidebar from "./components/SearchSidebar";

function Loading() {
    return (
        <>
            <Header />
            <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
                <div className='w-1/5'>
                    <div className='border-b pb-4 flex flex-col'>
                        <h1 className='mb-2'>Region</h1>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <div
                                key={num}
                                className='my-1 w-20 h-4 bg-slate-300 animate-pulse'></div>
                        ))}
                    </div>
                    <div className='border-b pb-4 mt-3 flex flex-col'>
                        <h1 className='mb-2'>Cuisine</h1>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <div
                                key={num}
                                className='my-1 w-20 h-4 bg-slate-300 animate-pulse'></div>
                        ))}
                    </div>
                    <div className='mt-3 pb-4'>
                        <h1 className='mb-2'>Price</h1>
                        <div className='flex'>
                            {[1, 2, 3].map((num) => (
                                <div
                                    key={num}
                                    className='mx-1 w-20 h-4 bg-slate-300 animate-pulse'></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='ml-3 w-5/6'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <div
                            key={num}
                            className='my-3 h-28 bg-slate-200 animate-pulse text-reg capitalize'></div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Loading;
