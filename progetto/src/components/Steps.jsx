import steps3 from '../images/steps3.svg'
import firstNumber from '../images/firstNumber.svg'
import secondNumber from '../images/secondNumber.svg'
import thirdNumber from '../images/thirdNumber.svg'
import fourthNumber from '../images/fourthNumber.svg'
import firstStep from '../images/firstStep.svg'
import secondStep from '../images/secondStep.svg'
import thirdStep from '../images/thirdStep.svg'
import fourthStep from '../images/fourthStep.svg'
import { Slide } from 'react-awesome-reveal'
import { Fade } from 'react-awesome-reveal'

function Steps() {
  return (
// primo
    <Fade triggerOnce={true}>
      <Slide direction='right' duration={2500} triggerOnce={true}>
    <section className="overflow-hidden sm:grid sm:grid-cols-2 flex mt-12 px-8 sm:px4 sm:h-fit">
      <div className='h-full'>
    <img
    alt=""
    src={firstStep}
    className="h-96 w-full object-cover sm:h-full sm:rounded-3xl sm:object-fill"
  />
  </div>
  <div className="p-8 md:p-12 lg:px-16 lg:py-24 sm:p-0 sm:w-full sm:pl-4">
    <div className="flex flex-col">
      <img src={firstNumber} alt="primo passo" className='h-20 mb-8 sm:mb-0 sm:h-16'/>
      <p className=" text-customBlue md:mt-4 md:block text-2xl sm:text-base">
        Cerca in tutta tranquillità il professionista di cui hai bisogno.
        Scegli tra migliaia di professionisti preparati, scelti appositamente per te.
      </p>
    </div>
  </div>
</section>
</Slide>
 {/* secondo */}
<Fade triggerOnce={true}>
      <Slide direction='left' duration={2500} triggerOnce={true}>
    <section className="overflow-hidden sm:grid sm:grid-cols-2 flex mt-12 px-8 sm:px-4">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24 sm:p-0 sm:w-full sm:pl-4">
    <div className="flex flex-col">
      <img src={secondNumber} alt="primo passo" className='h-20 mb-8 sm:mb-0 sm:h-16'/>
      <p className="  text-customBlue md:mt-4 md:block text-2xl sm:text-base">
        Assumilo, fagli svolgere il lavoro richiesto nei tempi da voi prestabiliti.
      </p>
    </div>
  </div>
  <img
    alt=""
    src={secondStep}
    className="h-96 w-full object-scale-down sm:h-66"
  />
</section>
</Slide>
</Fade>
{/* terzo */}
<Fade triggerOnce={true}>
      <Slide direction='right' duration={2500} triggerOnce={true}>
    <section className="overflow-hidden sm:grid sm:grid-cols-2 flex mt-12 px-8 sm:px4">
    <img
    alt=""
    src={thirdStep}
    className="h-96 w-full object-cover sm:h-60"
  />
  <div className="flex flex-col sm:pl-4">
      <img src={thirdNumber} alt="primo passo" className='h-20 mb-8 sm:mb-0 '/>
      <p className="  text-customBlue md:mt-4 md:block text-2xl sm:text-base pl-8">
        Paga il professionista con il metodo di pagamento che preferisci.
      </p>
    </div>
</section>
</Slide>
</Fade>
{/* quarto */}
<Fade triggerOnce={true}>
      <Slide direction='right' duration={2500} triggerOnce={true}>
    <section className="overflow-hidden sm:grid sm:grid-cols-2 flex mt-12 px-8 sm:px4">
  <div className=" p-8 md:p-12 lg:px-16 lg:py-24 sm:p-0 sm:w-full sm:pl-4">
  <div className="flex flex-col">
      <img src={fourthNumber} alt="primo passo" className='h-20 mb-8 sm:mb-0 sm:h-16'/>
      <p className="  text-customBlue md:mt-4 md:block text-2xl sm:text-base">
        Paga il professionista con il metodo di pagamento che preferisci.
      </p>
    </div>
  </div>
  <img
    alt=""
    src={fourthStep}
    className="h-96 w-full object-cover sm:h-60"
  />
</section>
</Slide>
</Fade>
</Fade>

)
}

export default Steps