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
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
    <div>
      <Navbar />
      <Jumbotron />
      <h1 className='flex justify-center text-5xl text-customBlue font-bold my-10 sm:text-4xl'>Cerca il tuo pro</h1>
      <div className="[@media(min-width:768px)]:hidden selectContainer">
        <Select />
      </div>
      <div className="flex flex-wrap justify-center bg [@media(max-width:767px)]:hidden">
        <Card image={idraulico} title="Idraulico" description="Affidati alla cura dei tuoi impianti con un servizio idraulico su cui puoi contare." />
        <Card image={elettricista} title="Elettricista" description="Trova l'elettricista adatto a te. Illumina la tua casa con soluzioni affidabili e sicure." />
        <Card image={imbianchino} title="Imbianchino" description="Trova l'imbianchino perfetto per trasformare i tuoi ambienti. Regala alla tua casa un tocco di freschezza e stile." />
        <Card image={giardiniere} title="Giardiniere" description="Trova il giardiniere perfetto per trasformare il tuo spazio verde. Dona nuova vita al tuo giardino e crea un'oasi di tranquillità." />
        <Card image={traslocatore} title="Traslocatore" description="Rendi il tuo trasloco un'esperienza senza stress! Affronta il cambiamento con serenità e affidabilità." />
        <Card image={pavimentista} title="Pavimentista" description="Dai vita al tuo spazio con stile e qualità insuperabili, inizia oggi stesso a realizzare il pavimento dei tuoi sogni." />
        <Card image={serramentista} title="Serramentista" description="Rendi la tua casa un luogo sicuro e confortevole. Proteggi il tuo ambiente con soluzioni affidabili e di alta qualità." />
        <Card image={interiorDesigner} title="Interior Designer" description="Dona personalità e stile unico alla tua casa, inizia oggi stesso a creare un ambiente che rifletta davvero te stesso." />
        <Card image={falegname} title="Falegname" description="Dai vita ai tuoi spazi con mobili su misura e dettagli impeccabili, inizia oggi stesso a creare un ambiente unico e accogliente." />
        <div className='[@media(min-width:769px)]:hidden '>
          <Card image={tuttofare} title="Tuttofare" description="Dalla manutenzione alla riparazione, siamo pronti a darti una mano! Inizia oggi stesso a risolvere ogni problema." />
        </div>
      </div>
      <div className="[@media(min-width:767px)]:hidden">
        <Bottone text={'Cerca pro'} />
      </div>
      <div className='[@media(max-width:767px)]:hidden'>
        <Bottone text={'Vedi altro'} />
      </div>
      <h1 className='flex justify-center text-5xl text-customBlue font-bold mt-20 sm:text-4xl'>Come funziona</h1>
      <Steps />
      <h1 className='flex justify-center text-5xl text-customBlue font-bold my-10 sm:text-2xl'>Professionisti nella tua zona</h1>
      <div className='w-11/12 pl-36 lg:pl-12'>
        <div className=''>
          <Slider {...settings}>
            <div className='py-8'>
              <RatingWithComment name="Paolo Sciuti" image={profile1} job="Elettricista" reviewsNumber={89} score={4.80} />
            </div>
            <div className='py-8'>
              <RatingWithComment name="Paolo Sciuti" image={profile1} job="Elettricista" reviewsNumber={89} score={4.80} />
            </div>
            <div className='py-8'>
              <RatingWithComment name="Paolo Sciuti" image={profile1} job="Elettricista" reviewsNumber={89} score={4.80} />
            </div>
            <div className='py-8'>
              <RatingWithComment name="Paolo Sciuti" image={profile1} job="Elettricista" reviewsNumber={89} score={4.80} />
            </div>
            <div className='py-8'>
              <RatingWithComment name="Paolo Sciuti" image={profile1} job="Elettricista" reviewsNumber={89} score={4.80} />
            </div>
            <div className='py-8'>
              <RatingWithComment name="Paolo Sciuti" image={profile1} job="Elettricista" reviewsNumber={89} score={4.80} />
            </div>
            <div className='py-8'>
              <RatingWithComment name="Paolo Sciuti" image={profile1} job="Elettricista" reviewsNumber={89} score={4.80} />
            </div>
            <div className='py-8'>
              <RatingWithComment name="Paolo Sciuti" image={profile1} job="Elettricista" reviewsNumber={89} score={4.80} />
            </div>
          </Slider>
        </div>

      </div>
      <div className='my-14'>
        <Bottone text={'Cerca altri pro'} />
      </div>
      <Reviews />
      <div className='mb-12 sm:mt-0'>
        <Bottone text='Leggi altre recensioni' />
      </div>
      <Footer />
    </div>
  )
}

export default Home