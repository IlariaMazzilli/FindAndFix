import React, { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';

function ProfilePro() {
const { userData } = useOutletContext();

if (!userData) {
    return <p>Loading...</p>;
  }

    // Gestisci eventuali errori nei dati dell'utente
    if (userData.error) {
        return <p className="text-red-500">{userData.error}</p>;
      }

    return (
        <div>
            <div className=" mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className=" shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <img src={userData.profileImage} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                                </img>
                                <h1 className="text-xl font-bold">{userData.nome}</h1>
                                <p className="text-gray-700">{userData.email}</p>
                                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                    <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contattami</a>
                                </div>
                            </div>
                            <hr className="my-6 border-t border-gray-300" />
                            <div className="flex flex-col">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Servizi offerti</span>
                                 <ul>
                                    {userData.categoria_servizi.map((servizio, index) => (
                            
                                        <li key={index} className="mb-2">{servizio}</li>
                                    ))}
                                </ul> 
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Informazioni su di me</h2>
                            <p className="text-gray-700">{userData.descrizioneProfessionista}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePro