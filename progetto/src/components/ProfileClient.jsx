import React from 'react';
import { useOutletContext } from 'react-router-dom';

const ProfileClient = () => {
  const { userData } = useOutletContext();

  return (
    <div className='w-full box-border'>
      <div className="h-full bg-customBlue p-8 w-full max-[768px]:p-0 max-[768px]:bg-transparent">
        <div className="bg-white rounded-lg shadow-xl pb-8 max-[768px]:shadow-none">
          <div className="flex flex-col items-center mt-4">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
              className="w-50 max-[768px]:w-32 max-[768px]:h-32 border-4 border-white rounded-full"
              alt="Profile"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">{userData.nome}</p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
            </div>
            <p className="text-sm text-gray-500">{userData.città}</p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 max-[768px]:p-0 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              
              
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
                  <span className="text-gray-700 flex-1 text-center">{userData.nome} {userData.cognome}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24 text-customBlue">Email:</span>
                  <span className="text-gray-700 flex-1 text-center">{userData.email}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileClient;