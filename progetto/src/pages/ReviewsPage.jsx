import React from 'react'
import Bottone from '../components/Bottone'
import { useNavigate } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

function ReviewsPage() {
    const navigate = useNavigate()
    return (
        <Fade triggerOnce={true} duration={2500}>
        <div>
            <div className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900 " id="reviews">

                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ">

                    <div className="mb-10 space-y-4 px-6 md:px-0">
                        <h2 className="text-center text-2xl font-bold text-customBlue dark:text-white md:text-4xl">
                            Recensioni degli utenti
                        </h2>
                    </div>


                    <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">


                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" />
                                <div>
                                    <h6 className="text-lg font-medium text-customBlue dark:text-white">Daniella Doe</h6>
                                </div>
                            </div>
                            <p className="mt-8">Ho avuto il piacere di lavorare con il signor Alessandro, un imbianchino davvero eccezionale. È stato molto puntuale e ha completato il lavoro nei tempi previsti. La sua attenzione ai dettagli e la qualità del suo lavoro sono stati impressionanti. Le pareti della mia casa non sono mai state così belle! Grazie a Find & Fix per avermi messo in contatto con un professionista così talentuoso.
                            </p>
                        </div>


                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none mt-24">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
                                <div>
                                    <h6 className="text-lg font-medium text-customBlue dark:text-white">Jane doe</h6>
                                </div>
                            </div>
                            <p className="mt-8"> La signora Laura, una giardiniera molto esperta, ha trasformato il mio giardino in un'oasi di bellezza. È stata estremamente professionale, ha ascoltato le mie richieste e ha fornito ottimi consigli su come migliorare il mio spazio verde. Il risultato finale è stato oltre le mie aspettative. Un grazie di cuore a Find & Fix per avermi aiutato a trovare una professionista così competente
                            </p>
                        </div>


                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/18.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
                                <div>
                                    <h6 className="text-lg font-medium text-customBlue dark:text-white">Yanick Doe</h6>
                                </div>
                            </div>
                            <p className="mt-8">Il signor Marco è un idraulico davvero bravo. Ha risolto un problema complesso nel mio impianto idraulico con grande efficienza. Non solo è stato puntuale, ma ha anche spiegato in dettaglio cosa stava facendo e perché. È raro trovare un professionista così trasparente e competente. Grazie Find & Fix per avermi messo in contatto con Marco.
                            </p>
                        </div>


                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
                                <div>
                                    <h6 className="text-lg font-medium text-customBlue dark:text-white">Jane Doe</h6>
                                </div>
                            </div>
                            <p className="mt-8">La signora Elena, una piastrellista molto abile, ha rifatto il pavimento del mio bagno con una precisione incredibile. Ogni piastrella è stata posizionata perfettamente e il risultato è semplicemente stupendo. Elena è stata molto cortese e ha mantenuto l'area di lavoro pulita e ordinata. Sono estremamente soddisfatto del servizio e ringrazio Find & Fix per avermi aiutato a trovare una professionista così talentuosa.
                            </p>
                        </div>


                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/62.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
                                <div>
                                    <h6 className="text-lg font-medium text-customBlue dark:text-white">Andy Doe</h6>
                                </div>
                            </div>
                            <p className="mt-8">Ho chiamato il signor Fabio per rifare l'impianto elettrico di casa mia e non potrei essere più soddisfatto. È stato rapido, efficiente e molto attento alla sicurezza. Fabio ha verificato ogni dettaglio e mi ha fornito un impianto moderno e sicuro. La sua professionalità mi ha davvero colpito. Grazie Find & Fix per il vostro eccellente servizio.
                            </p>
                        </div>


                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" width="400" height="400" loading="lazy" />
                                <div>
                                    <h6 className="text-lg font-medium text-customBlue dark:text-white">Yanndy Doe</h6>
                                </div>
                            </div>
                            <p className="mt-8">La signora Marta, una decoratrice d'interni molto talentuosa, ha trasformato il mio soggiorno in uno spazio elegante e accogliente. Ha saputo cogliere i miei gusti e ha creato un ambiente che mi rispecchia perfettamente. Marta è stata anche molto puntuale e professionale durante tutto il processo. Sono molto soddisfatto del risultato finale. Grazie Find & Fix per aver reso tutto possibile.
                            </p>
                        </div>

                    </div>

                    <div className='flex justify-center cursor-pointer mt-4' onClick={()=> navigate('/createReview')}>
                        <Bottone text={'Lascia una recensione'} />
                    </div>

                </div>
            </div>
        </div>
        </Fade>
    )
}

export default ReviewsPage