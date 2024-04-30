import '../index.css'
import Jumbotron from "../components/Jumbotron"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Reviews from "../components/Reviews"
import Steps from '../components/Steps'
import Footer from '../components/Footer'
import Bottone from "../components/Bottone"
import idraulico from '../images/idraulico.jpeg'
import elettricista from '../images/elettricista.jpg'
import imbianchino from '../images/imbianchino.jpg'
import giardiniere from '../images/giardiniere.jpg'
import traslocatore from '../images/traslocatore.jpg'
import pavimentista from '../images/pavimentista.jpg'
import serramentista from '../images/serramentista.jpg'
import interiorDesigner from '../images/interiorDesigner.jpg'
import falegname from '../images/falegname.jpeg'
import tuttofare from '../images/tuttofare.jpeg'
import RatingWithComment from '../components/RatingWithComment'
import profile1 from '../images/profile1.jpeg'
import profile2 from '../images/profile2.webp'
import profile3 from '../images/profile3.webp'
import profile4 from '../images/profile4.webp'
import Select from '../components/Select'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const professionals = [
    { name: 'Paolo Sciuti', job: 'Imbianchino', image: profile1, reviewsNumber: 87, score: 4.76 },
    { name: 'Lorenzo De Biase', job: 'Idraulico', image: profile2, reviewsNumber: 100, score: 4.55 },
    { name: 'Alberto Pini', job: 'Elettricista', image: profile3, reviewsNumber: 45, score: 4.90 },
    { name: 'Giuseppe Cordone', job: 'Serramentista', image: profile4, reviewsNumber: 67, score: 4.80 }
  ];

   // Configurazione per il carosello
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Numero di elementi da mostrare contemporaneamente
    slidesToScroll: 1 // Numero di elementi da scorrere alla volta
  };
  
  return (
    <div>
        <Navbar/>
        <Jumbotron/>
        <h1 className='flex justify-center text-5xl text-customBlue font-bold my-10 sm:text-4xl'>Cerca il tuo pro</h1>
        <div className="[@media(min-width:768px)]:hidden selectContainer">
          <Select/>
          </div>
        <div className="flex flex-wrap justify-center bg [@media(max-width:767px)]:hidden">
          <Card image={idraulico} title="Idraulico" description="Scegli l'idraulico adatto alle tue esigenze"/>
          <Card image={elettricista} title="Elettricista" description="Scegli l'elettricista adatto alle tue esigenze"/>
          <Card image={imbianchino} title="Imbianchino" description="Scegli l'imbianchino adatto alle tue esigenze"/>
          <Card image={giardiniere} title="Giardiniere" description="Scegli il giardiniere adatto alle tue esigenze"/>
          <Card image={traslocatore} title="Traslocatore" description="Devi traslocare ? Scegli il traslocatore adatto alle tue esigenze"/>
          <Card image={pavimentista} title="Pavimentista" description="Devi rifare il pavimento ? Scegli il pavimentista adatto alle tue esigenze"/>
          <Card image={serramentista} title="Serramentista" description="Devi rifare le finestre ? Scegli il serramentista adatto alle tue esigenze"/>
          <Card image={interiorDesigner} title="Interior Designer" description="Ti serve una mano a decorare la casa ? Scegli l'interior designer adatto a te"/>
          <Card image={falegname} title="Falegname" description="Ti serve una mano a decorare la casa ? Scegli l'interior designer adatto a te"/>
          <div className='[@media(min-width:769px)]:hidden '>
          <Card image={tuttofare} title="Tuttofare" description="Ti serve una mano a decorare la casa ? Scegli l'interior designer adatto a te"/>
          </div>
        </div>
        <div className="[@media(min-width:767px)]:hidden">
        <Bottone text={'Cerca pro'}/>
        </div>
        <div className='[@media(max-width:767px)]:hidden'>
        <Bottone text={'Vedi altro'}/>
        </div>
        <h1 className='flex justify-center text-5xl text-customBlue font-bold mt-20 sm:text-4xl'>Come funziona</h1>
        <Steps/>
        <h1 className='flex justify-center text-5xl text-customBlue font-bold my-10 sm:text-2xl'>Professionisti nella tua zona</h1>
       <div className='w-11/12 pl-36 lg:pl-12'>
        <Slider {...settings}>
        {professionals.map((professional, index) => (
          <div key={index} className='py-4'>
            <RatingWithComment {...professional} />
          </div>
        ))}
      </Slider>
      </div>
        <div className='my-14'>
        <Bottone text={'Cerca altri pro'}/>
        </div>
        <Reviews/>
        <div className='mb-12'>
          <Bottone text='Leggi altre recensioni'/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home