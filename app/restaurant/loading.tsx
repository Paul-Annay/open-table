import React from "react";

function Loading() {
    return (
        <main>
            <div className='h-96 overflow-hidden animate-pulse bg-slate-200'>
                <div className='bg-center h-full'></div>
            </div>
            <div className='flex m-auto w-2/3 justify-between items-start mt-9'>
                <div className='bg-white rounded p-3 shadow w-[70%]'>
                    <nav className='flex text-reg border-b pb-2'>
                        <h4 className='mr-7'>Overview</h4>
                        <p className='mr-7'>Menu</p>
                        <h4 className='mr-7'>Reviews</h4>
                    </nav>
                    <div className='mt-4 border-b pb-6 animate-pulse bg-slate-200 h-16 rounded w-[400px]'></div>
                    <div className='flex items-end animate-pulse'>
                        <div className='ratings mt-2 flex items-center'>
                            <div className='flex items-center bg-slate-200 w-56'></div>
                            <p className='text-reg ml-3'></p>
                        </div>
                        <div>
                            <p className='text-reg ml-4'> </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Loading;
