import React, { useState } from 'react';

function Notifiche() {
    return (
        <div className="h-fit  my-8 w-full mx-4">
            <div className="  bg-gray-100 dark:bg-gray-800 rounded-xl mx-auto border p-10 shadow-sm w-full ">
                <div className="flex justify-center  w-full">
                    <h3 className="font-bold text-xl sm:text-2xl text-customBlue dark:text-white">Notifiche</h3>

                </div>
                <p className="mt-8 font-medium text-gray-500 text-sm sm:text-base dark:text-white">Oggi</p>
                <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                    <div className=" inline-flex items-center justify-between w-full">
                        <div className="inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 36 36" className='mr-4'>
                                <path fill="#0F5DA6" d="m32.85 28.13l-.34-.3A14.37 14.37 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93l-.34.3v2.82h29.8Z" class="clr-i-solid clr-i-solid-path-1" />
                                <path fill="#0F5DA6" d="M15.32 32a2.65 2.65 0 0 0 5.25 0Z" className="clr-i-solid clr-i-solid-path-2" />
                                <path fill="none" d="M0 0h36v36H0z" />
                            </svg>
                            <h3 className="font-bold text-base text-customBlue">Nuova notifica</h3>
                        </div>
                        <p className="text-xs text-gray-500">
                            2 min fa
                        </p>
                    </div>
                    <p className="mt-1 text-sm">
                        Promemoria: tenere i dati aggiornati è importante !
                    </p>
                </div>

                <p className="mt-8 font-medium text-gray-500 dark:text-white text-sm sm:text-base">Ieri</p>
                <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                    <div className=" inline-flex items-center justify-between w-full">
                        <div className="inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 36 36" className='mr-4'>
                                <path fill="#0F5DA6" d="m32.85 28.13l-.34-.3A14.37 14.37 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93l-.34.3v2.82h29.8Z" class="clr-i-solid clr-i-solid-path-1" />
                                <path fill="#0F5DA6" d="M15.32 32a2.65 2.65 0 0 0 5.25 0Z" className="clr-i-solid clr-i-solid-path-2" />
                                <path fill="none" d="M0 0h36v36H0z" />
                            </svg>
                            <h3 className="font-bold text-base text-customBlue">Notifica</h3>
                        </div>
                        <p className="text-xs text-gray-500">
                            12:47
                        </p>
                    </div>
                    <p className="mt-1 text-sm">
                        Hai ricevuto un nuovo messaggio !
                    </p>
                </div>
                <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                    <div className=" inline-flex items-center justify-between w-full">
                        <div className="inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 36 36" className='mr-4'>
                                <path fill="#0F5DA6" d="m32.85 28.13l-.34-.3A14.37 14.37 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93l-.34.3v2.82h29.8Z" class="clr-i-solid clr-i-solid-path-1" />
                                <path fill="#0F5DA6" d="M15.32 32a2.65 2.65 0 0 0 5.25 0Z" className="clr-i-solid clr-i-solid-path-2" />
                                <path fill="none" d="M0 0h36v36H0z" />
                            </svg>
                            <h3 className="font-bold text-base text-customBlue">Notifica</h3>
                        </div>
                        <p className="text-xs text-gray-500">
                            12:43
                        </p>
                    </div>
                    <p className="mt-1 text-sm">
                        Benvenuto su Find & Fix ! 
                    </p>
                </div>
                <div className='flex justify-center'>
                    <button
                        className="inline-flex text-sm bg-white justify-center px-4 py-2 mt-12 w-fit text-red-500 items-center rounded font-medium
     shadow border focus:outline-none transform active:scale-75 transition-transform duration-700 hover:bg-customGreen
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
