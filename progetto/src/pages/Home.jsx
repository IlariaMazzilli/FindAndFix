import '../index.css'
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
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
import profile5 from '../images/profile5.webp'
import profile6 from '../images/profile6.webp'
import profile7 from '../images/profile7.webp'
import profile8 from '../images/profile8.webp'
import Select from '../components/Select'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { DarkModeContext } from '../DarkMode'; // Assicurati che l'importazione sia corretta
// import '../darkModeStyles.css'


function Home() {
  // const { toggleDarkMode } = useContext(DarkModeContext);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className='dark:bg-black dark:text-white'>
       <Navbar /> 
      <Fade cascade={true} triggerOnce={true} duration={3500}>
        <Jumbotron />
      </Fade>
      <Fade  triggerOnce={true} duration={2500}>
        <h1 className='flex maintitle justify-center text-5xl text-customBlue font-bold my-10 smtext-4xl dark:text-white max-[600px]:text-4xl'>Cerca il tuo pro</h1>
      </Fade>
      <Fade triggerOnce={true} duration={2500}>
        <div className="[@media(min-width:768px)]:hidden z-20">
          <Select />
        </div>
        <div className="flex flex-wrap justify-center bg [@media(max-width:767px)]:hidden">
        <Fade triggerOnce={true}  duration={3500}>
          <Card image={idraulico} title="Idraulico" description="Affidati alla cura dei tuoi impianti con un servizio idraulico su cui puoi contare." />
        </Fade>
        <Fade triggerOnce={true}  duration={3500}>
          <Card image={elettricista} title="Elettricista" description="Trova l'elettricista adatto a te. Illumina la tua casa con soluzioni affidabili e sicure." />
        </Fade>
        <Fade triggerOnce={true}  duration={3500}>
          <Card image={imbianchino} title="Imbianchino" description="Trova l'imbianchino perfetto per trasformare i tuoi ambienti. Regala alla tua casa un tocco di freschezza e stile." />
        </Fade>
        <Fade triggerOnce={true}  duration={3500}>
          <Card image={giardiniere} title="Giardiniere" description="Trova il giardiniere perfetto per trasformare il tuo spazio verde. Dona nuova vita al tuo giardino e crea un'oasi di tranquillità." />
        </Fade>
        <Fade triggerOnce={true}  duration={3500}>
          <Card image={traslocatore} title="Traslocatore" description="Rendi il tuo trasloco un'esperienza senza stress! Affronta il cambiamento con serenità e affidabilità." />
        </Fade>
        <Fade triggerOnce={true}  duration={3500}>
          <Card image={pavimentista} title="Pavimentista" description="Dai vita al tuo spazio con stile e qualità insuperabili, inizia oggi stesso a realizzare il pavimento dei tuoi sogni." />
        </Fade>
        <Fade triggerOnce={true}  duration={3500}>
          <Card image={serramentista} title="Serramentista" description="Rendi la tua casa un luogo sicuro e confortevole. Proteggi il tuo ambiente con soluzioni affidabili e di alta qualità." />
        </Fade>
        <Fade triggerOnce={true}  duration={3500}>
          <Card image={interiorDesigner} title="Interior Designer" description="Dona personalità e stile unico alla tua casa, inizia oggi stesso a creare un ambiente che rifletta davvero te stesso." />
        </Fade>
        <Fade triggerOnce={true}  duration={3500}>
          <Card image={falegname} title="Falegname" description="Dai vita ai tuoi spazi con mobili su misura e dettagli impeccabili, inizia oggi stesso a creare un ambiente unico e accogliente." />
        </Fade>
        <Fade triggerOnce={true}  duration={3500}>
          <div className=''>
            <Card image={tuttofare} title="Tuttofare" description="Dalla manutenzione alla riparazione, siamo pronti a darti una mano! Inizia oggi stesso a risolvere ogni problema." />
          </div>
        </Fade>
        </div>
      </Fade>
      <Fade triggerOnce={true} duration={4500}>
        <div className="[@media(min-width:767px)]:hidden">
          <Bottone text={'Cerca pro'} />
        </div>
      </Fade>
      <div className='[@media(max-width:767px)]:hidden'>
        <Bottone text={'Vedi altro'} />
      </div>
      <Fade triggerOnce={true}>
        <h1 className='flex maintitle justify-center text-5xl text-customBlue font-bold mt-20 max-[600px]:text-3xl'>Come funziona</h1>
      </Fade>
      <Fade triggerOnce={true}>
        <Steps/>
      </Fade>
      <Fade triggerOnce={true} duration={2500}>
        <h1 className='flex maintitle justify-center text-5xl text-customBlue font-bold mt-20 max-[600px]:text-3xl '>Professionisti vicini a te</h1>
      </Fade>
      <div className=' max-[375px]:p-12 p-8 overflow-hidden'>
        <Slider {...settings}>
          <div className='py-8 w-fit max-[600px]:px-8'>
            <RatingWithComment name="Paolo Sciuti" image={profile1} job="Elettricista" reviewsNumber={89} score={4.80} />
          </div>
          <div className='py-8 w-fit max-[600px]:px-8'>
            <RatingWithComment name="Riccardo Rossi" image={profile2} job="Imbianchino" reviewsNumber={57} score={4.95} />
          </div>
          <div className='py-8 w-fit max-[600px]:px-8'>
            <RatingWithComment name="Paolo Corsi" image={profile3} job="Serramentista" reviewsNumber={95} score={4.70} />
          </div>
          <div className='py-8 w-fit max-[600px]:px-8'>
            <RatingWithComment name="Umberto Del Capo" image={profile4} job="Serramentista" reviewsNumber={45} score={4.80} />
          </div>
          <div className='py-8 w-fit max-[600px]:px-8'>
            <RatingWithComment name="Paolo Sciuti" image={profile5} job="Elettricista" reviewsNumber={89} score={4.80} />
          </div>
          <div className='py-8 w-fit max-[600px]:px-8'>
            <RatingWithComment name="Michele Dellapiazza" image={profile6} job="Interior Designer" reviewsNumber={140} score={4.75} />
          </div>
          <div className='py-8 w-fit max-[600px]:px-8'>
            <RatingWithComment name="Giovanni Federici" image={profile7} job="Falegname" reviewsNumber={98} score={4.97} />
          </div>
          <div className='py-8 w-fit max-[600px]:px-8'>
            <RatingWithComment name="Alberto Vallesi" image={profile8} job="Interior Designer" reviewsNumber={120} score={4.85} />
          </div>
        </Slider>
      </div>
      <Fade triggerOnce={true} duration={3500}>
        <div className='my-14'>
          <Bottone text={'Cerca altri pro'} />
        </div>
      </Fade>
      <Fade triggerOnce={true} duration={2500}>
        <h2 className="text-4xl maintitle font-bold tracking-tight text-customBlue w-full max-[600px]:text-3xl flex justify-center " >
          Recensioni degli utenti
        </h2>
      </Fade>
      <Fade triggerOnce={true} duration={4500}>
        <Slide direction={'left'} triggerOnce={true} duration={2500}>
          <Reviews />
        </Slide>
        <div className='mb-12 smmt-0'>
          <Bottone text='Leggi altre recensioni' />
        </div>
      </Fade>
      <Footer />
    </div>
  )
}

export default Home