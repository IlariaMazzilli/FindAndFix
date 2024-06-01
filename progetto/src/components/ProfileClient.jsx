import React, { useState, useEffect } from 'react'
import axios from 'axios'
import axiosInstance from './AxiosInstance'

function ProfileClient({ name, surname, city, birthday, joined, phone, mail }) {
   

    return (
        <div className='w-full box-border'>
            <div className="h-full bg-customBlue p-8 w-full max-[768px]:p-0 max-[768px]:bg-transparent">
                <div className="bg-white rounded-lg shadow-xl pb-8 max-[768px]:shadow-none">
                    <div className="flex flex-col items-center mt-4">
                        <img
                            src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
                            className="w-50 max-[768px]:w-32 max-[768px]:h-32 border-4 border-white rounded-full"
                        />
                        <div className="flex items-center space-x-2 mt-2">
                            <p className="text-2xl">{name}</p>
                            <span className="bg-blue-500 rounded-full p-1" title="Verified">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </span>
                        </div>
                        <p className="text-sm text-gray-500">{city}</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 max-[768px]:p-0 mt-2">
                        <div className="flex items-center space-x-4 mt-2">
                            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                                </svg>
                                <span>Connect</span>
                            </button>
                            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                                </svg>
                                <span>Message</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                    <div className="w-full flex flex-col">
                        <div className="flex-1 bg-white rounded-lg shadow-xl max-[768px]:p-0 p-8 max-[768px]:shadow-none">
                            <h4 className="text-xl text-gray-900 font-bold">Informazioni personali</h4>
                            <ul className="mt-2 text-gray-700">
                                <li className="flex border-y py-2">
                                    <span className="font-bold w-24 text-customBlue">Nome e cognome:</span>
                                    <span className="text-gray-700 flex-1 text-center">{name} e {surname}</span>
                                </li>
                               
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24 text-customBlue">Iscritt* il:</span>
                                    <span className="text-gray-700 flex-1 text-center">10 gennaio 2022</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24 text-customBlue">Cellulare:</span>
                                    <span className="text-gray-700 flex-1 text-center">+39 340238579</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24 text-customBlue">Email:</span>
                                    <span className="text-gray-700 flex-1 text-center">serena@gmail.com</span>
                                </li>
                                <li className="flex border-b py-2">
                                    <span className="font-bold w-24 text-customBlue">Città:</span>
                                    <span className="text-gray-700 flex-1 text-center">Napoli, NA</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileClient
