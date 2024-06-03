import React from 'react';
import ProfileCard from './ProfileCard';
import Michele from '../images/Michele.jpg';
import Giuseppe from '../images/Giuseppe.jpg';
import francesco from '../images/francesco.jpg';
import Nadia from '../images/Nadia.jpg';
import Enzo from '../images/Enzo.png';
import sylvia from '../images/sylvia.jpg';
import '../myStyles.css';
import { Link } from 'react-router-dom';



const ProfileList = () => {

  const profiles = [
    { id: 1, name: 'Michele Rossi', image: Michele, price: '50€', rating: 4.5, description: 'Con oltre 12 anni di esperienza nel settore, offro una vasta gamma di servizi elettrici per soddisfare ogni tua esigenza, sia in ambito residenziale che commerciale. Dalla semplice installazione di una presa elettrica alla realizzazione di complessi impianti industriali, lavoro con passione e dedizione per garantire la massima sicurezza,' },
    { id: 2, name: 'Giuseppe Verdi', image: Giuseppe, price: '60€', rating: 3.5, description: 'Un giardino curato e ben progettato non è solo un luogo da ammirare, ma anche uno spazio dove rilassarsi, giocare con i bambini e trascorrere momenti piacevoli con la famiglia e gli amici.' },
    { id: 3, name: 'Francesco Bianchi', image: francesco, price: '55€', rating: 4, description: 'Sono un imbianchino esperto con una passione per il colore e una comprovata esperienza nel settore. Offro una vasta gamma di servizi di pitturazione per interni ed esterni, per abitazioni, uffici e locali commerciali.' },
    { id: 4, name: 'Nadia Novara', image: Nadia, price: '60€', rating: 4.5, description: 'Dare vita alla casa dei tuoi sogni è il mio obiettivo. Come interior designer, creo ambienti unici e personalizzati, che rispecchiano la tua personalità e le tue esigenze.' },
    { id: 5, name: 'Enzo Dubai', image: Enzo, price: '50€', rating: 5, description: 'Con anni di esperienza e una passione per il mio lavoro, sono un idraulico professionista in grado di risolvere qualsiasi problema idraulico in modo rapido ed efficiente' },
    { id: 6, name: 'Sylvia Darqua', image: sylvia, price: '60€', rating: 2.5, description: 'Sono un interior designer appassionata con 7 anni di esperienza nella creazione di spazi interni eleganti e funzionali. Lavoro a stretto contatto con i miei clienti per capire le loro esigenze e il loro stile di vita, e poi creo design personalizzati che superano le loro aspettative.' },
  ];


  return (
    <div>
      <h1 className='mt-8 px-6 text-customBlue text-2xl font-extrabold max-[768px]:text-xl'>Scegli il professionista adatto a te!</h1>
      <div className="containerwewe">
        {profiles.map((profile) => (
          <Link
            key={profile.id}
            to={`/clientViewPro/${profile.name}/${profile.description}`}
            
          >
            <ProfileCard
              key={profile.id}
              id={profile.id}
              name={profile.name}
              image={profile.image}
              description={profile.description}
              rating={profile.rating}
              pricing={profile.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
