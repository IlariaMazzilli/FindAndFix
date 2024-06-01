import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validazione dei campi di input
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Il nome è richiesto';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'L\'email è richiesta';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Inserisci un\'email valida';
        }
        if (!formData.subject.trim()) {
            newErrors.subject = 'Il soggetto è richiesto';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Il messaggio è richiesto';
        }
        setErrors(newErrors);
        // Invia il modulo solo se non ci sono errori di validazione
        if (Object.keys(newErrors).length === 0) {
            // Qui puoi eseguire l'invio effettivo del modulo
            console.log('Form submitted:', formData);
            thankyouPage();
        }
    };

    function thankyouPage() {
        navigate('/formReceived');
    }

    return (
        <div>
            <div className="my-6">
                <div className="max-w-6xl mx-auto bg-customBlue rounded-lg max-[768px]:rounded-none">
                    <div className="grid md:grid-cols-2 items-center gap-16 sm:p-10 p-4 font-[sans-serif]">
                        <div>
                            <h1 className="text-4xl font-extrabold text-white">Contatta il professionista</h1>
                            <p className="text-sm text-gray-400 mt-3">Ricorda alcuni consigli per essere il più chiaro possibile:
                            <ul className="list-disc pl-6 mt-2">
                                <li>Spiega di cosa hai bisogno</li>
                                <li>Se puoi, dai informazioni dettagliate sul tipo di materiale su cui dovrà operare il professionista</li>
                                <li>Fornisci degli orari in cui il professionista potrà contattarti</li>
                            </ul>
                            </p>
                            <ul className="mt-12 space-y-8">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff'
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />
                                    </svg>
                                    <a href="javascript:void(0)" className="text-white text-sm ml-3">
                                        <strong>findandfix@info.com
                                        </strong>
                                    </a>
                                </li>

                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' viewBox="0 0 368.16 368.16">
                                        <path d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z" data-original="#000000"></path>
                                        <path d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z" data-original="#000000"></path>
                                    </svg>
                                    <a href="javascript:void(0)" className="text-white text-sm ml-3">
                                        <strong>Piazza della Luna, 14, Domodossola, 28845</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-200 p-6 rounded-lg">
                            <form onSubmit={handleSubmit} className="mt-2 space-y-4">
                                <input 
                                    type='text' 
                                    name='name'
                                    placeholder='Nome e cognome'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-md py-3 px-4 text-sm outline-customGreen" 
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                <input 
                                    type='email' 
                                    name='email'
                                    placeholder='Email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-md py-3 px-4 text-sm outline-customGreen" 
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                <input 
                                    type='text' 
                                    name='subject'
                                    placeholder='Spiega in una riga il tuo problema'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full rounded-md py-3 px-4 text-sm outline-customGreen" 
                                />
                                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                                <textarea 
                                    name='message'
                                    placeholder='Segui i nostri consigli e contatta il pro'
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full rounded-md px-4 text-sm pt-3 outline-customGreen"
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                <div className='w-full flex justify-center'>
                                    <button type='submit' className="text-white bg-customGreen transition hover:scale-110 font-semibold rounded-md text-sm px-4 py-3 flex items-center justify-center w-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2" viewBox="0 0 548.244 548.244">
                                            <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
                                        </svg>
                                        Invia Messaggio
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
