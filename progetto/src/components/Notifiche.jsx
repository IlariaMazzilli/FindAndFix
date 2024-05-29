import React, { useState } from 'react';

function Notifiche() {
    return (
        <div className="h-fit  my-8 w-full">
            <div className="  bg-gray-100 dark:bg-gray-800 rounded-xl mx-auto border p-10 shadow-sm w-full">
                <div className="inline-flex items-center justify-between w-full">
                    <h3 className="font-bold text-xl sm:text-2xl text-gray-800 dark:text-white">Notifiche</h3>
                   
                </div>
                <p className="mt-8 font-medium text-gray-500 text-sm sm:text-base dark:text-white">Oggi</p>
                <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                    <div className=" inline-flex items-center justify-between w-full">
                        <div className="inline-flex items-center">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/763/763812.png"
                                alt="Training Icon" className="w-6 h-6 mr-3" />
                            <h3 className="font-bold text-base text-gray-800">Training</h3>
                        </div>
                        <p className="text-xs text-gray-500">
                            2 min fa
                        </p>
                    </div>
                    <p className="mt-1 text-sm">
                        Hey! Do you remember about choosing your training regime?
                    </p>
                </div>
                
                <p className="mt-8 font-medium text-gray-500 dark:text-white text-sm sm:text-base">Ieri</p>
                <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                    <div className=" inline-flex items-center justify-between w-full">
                        <div className="inline-flex items-center">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/6863/6863272.png"
                                alt="Form Icon" className="w-6 h-6 mr-3" />
                            <h3 className="font-bold text-base text-gray-800">Forms</h3>
                        </div>
                        <p className="text-xs text-gray-500">
                            12:47
                        </p>
                    </div>
                    <p className="mt-1 text-sm">
                        Remember about filling out the COVID-19 from before the next appointment tomorrow
                    </p>
                </div>
                <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                    <div className=" inline-flex items-center justify-between w-full">
                        <div className="inline-flex items-center">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/763/763812.png"
                                alt="Training Icon" className="w-6 h-6 mr-3" />
                            <h3 className="font-bold text-base text-gray-800">Training</h3>
                        </div>
                        <p className="text-xs text-gray-500">
                            12:43
                        </p>
                    </div>
                    <p className="mt-1 text-sm">
                        We're glad you've decided to use our training system! Let's now set a complete of things
                    </p>
                </div>
                <div className='flex justify-center'>
                <button
                    className="inline-flex text-sm bg-white justify-center px-4 py-2 mt-12 w-fit text-red-500 items-center rounded font-medium
     shadow border focus:outline-none transform active:scale-75 transition-transform duration-700 hover:bg-red-500
      hover:text-white hover:-translate-y-1 hover:scale-110 dark:hover:bg-white dark:text-gray-800 dark:hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 sm:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Cancella tutte le notifiche
                </button>
                </div>
            </div>
        </div>
    )
}

export default Notifiche;
