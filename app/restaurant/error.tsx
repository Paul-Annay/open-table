"use client";

import Image from "next/image";
import React from "react";
import errorMascot from "../../public/icons/error.png";

function Error({ error }: { error: Error }) {
    return (
        <div className='h-screen bg-gray-200 flex flex-col justify-center items-center'>
            <Image
                src={errorMascot}
                alt='error page icon'
                className='w-56 mb-8'
            />
            <div className='bg-white px-9 py-14 shadow roudned'>
                <h3 className='text-3xl font-bold'>
                    Well, this is embarrassing
                </h3>
                <p className='text-reg font-bold'>{error.message}</p>
                <p className='mt-6 text-sm font-light'>Error Code: 404</p>
            </div>
        </div>
    );
}

export default Error;
