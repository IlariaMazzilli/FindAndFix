import React, {useContext} from 'react';
import { useParams, useNavigate, Link} from 'react-router-dom'
import Michele from '../images/Michele.jpg';
import Giuseppe from '../images/Giuseppe.jpg';
import francesco from '../images/francesco.jpg';
import Nadia from '../images/Nadia.jpg';
import Enzo from '../images/Enzo.png';
import sylvia from '../images/sylvia.jpg';


function ViewClientProfilePro() {
    const { name, description } = useParams()
    const proImage = localStorage.getItem('ProfessionistaImmagine')

    const imageMap = {
        Michele: Michele,
        Giuseppe: Giuseppe,
        francesco: francesco,
        Nadia: Nadia,
        Enzo: Enzo,
        sylvia: sylvia,
      };

      const imageSrc = imageMap[proImage] || '';
    
   
    return (

        <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <img
                                    src={imageSrc}
                                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-cover"
                                    alt={name}
                                />
                                <h1 className="text-xl font-bold">{name}</h1>

                                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                    <Link to="/contactForm" className="bg-customBlue hover:bg-customGreen text-white py-2 px-4 rounded">Contatta</Link>

                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Informazioni su {name}</h2>
                            <p className="text-gray-700">
                                {description}
                            </p>

                            {/* stelline reviews */}
                            <div className="flex justify-center mt-4">
                               
                                
                                <a href="#" className="text-sm font-medium text-customBlue underline hover:no-underline dark:text-white">73 recensioni</a>
                            </div>

                        </div>

                        {/* prima recensione */}
                        <article className='mt-8'>
                            <div className="flex items-center mb-4">
                                <img className="w-16 h-16 me-4 rounded-full object-cover" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <div className="font-medium dark:text-white">
                                    <p>Loredana Villa <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Iscritto il 08/2014</time></p>
                                </div>
                            </div>
                            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                {/* Ripeti per le icone di rating */}
                                <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Gentile e Puntuale, Un Lavoro Impeccabile!</h3>
                            </div>
                            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Recensione creata il<time dateTime="2017-03-03 19:00"> 26 marzo 2021</time></p></footer>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">{name} è molto gentile, puntuale ed efficiente. Ha svolto il lavoro in modo impeccabile. Grazie Find & Fix per avermi messo in contatto con un vero professionista!</p>
                            


                        </article>
                        {/* seconda recensione */}
                        <article className='mt-8'>
                            <div className="flex items-center mb-4">
                                <img className="w-16 h-16 me-4 rounded-full object-cover" src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <div className="font-medium dark:text-white">
                                    <p>Sabrina De Carpo <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Iscritto il 11/2019</time></p>
                                </div>
                            </div>
                            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                {/* Ripeti per le icone di rating */}
                                <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Estremamente Professionale e Disponibile</h3>
                            </div>
                            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Recensione creata il <time dateTime="2017-03-03 19:00"> 26 novembre 2019</time></p></footer>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">{name} ha lavorato con precisione e dedizione. Sono molto contento del risultato. Find & Fix ha fatto un ottimo lavoro nel mettere in contatto i clienti con professionisti di qualità!</p>


                        </article>
                        {/* terza recensione */}
                        <article className='mt-8'>
                            <div className="flex items-center mb-4">
                                <img className="w-16 h-16 me-4 rounded-full object-cover" src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <div className="font-medium dark:text-white">
                                    <p>Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Iscritto il 09/2019</time></p>
                                </div>
                            </div>
                            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                {/* Ripeti per le icone di rating */}
                                <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Cortesia e Maestria Impareggiabili</h3>
                            </div>
                            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Recensione creata il <time dateTime="2017-03-03 19:00"> 2 ottobre 2019</time></p></footer>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">{name} ha dimostrato una grande professionalità e una cura impeccabile nel suo lavoro. Sono davvero contento del risultato finale. Grazie a Find & Fix per aver reso tutto così semplice!</p>


                        </article>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ViewClientProfilePro;
