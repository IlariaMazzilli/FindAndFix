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
    <section className="overflow-hidden mobile:grid mobile:grid-cols-2 flex mt-12 px-8 mobile:px-4">
    <img src={firstNumber} alt="primo passo" className='h-20 mb-8 mobile:mb-0 hidden mobile:flex mobile:flex-col mobile:mt-8 mobile:ml-8 mobile:pl-8'/>
    <img
    alt=""
    src={firstStep}
    className="h-96 w-full object-cover mobile:h-60 mobile:hidden"
  />
  <div className="flex flex-col mobile:pl-0">
      <img src={firstNumber} alt="primo passo" className='h-20 mb-8 mobile:mb-0 mobile:hidden'/>
      <p className="  text-customBlue medium:mt-4 medium:block text-2xl mobile:text-base pl-8 mobile:pl-0">
        Cerca in tutta tranquillità il professionista adatto alle tue esigenze tra migliaia di professionisti disponibili.
      </p>
    </div>
</section>
</Slide>
 {/* secondo */}
<Fade triggerOnce={true}>
      <Slide direction='left' duration={2500} triggerOnce={true}>
    <section className="overflow-hidden mobile:grid mobile:grid-cols-2 flex mt-12 px-8 mobile:px-4">
  <div className="p-8 medium:p-12 large:px-16 large:py-24 mobile:p-0  mobile:pl-4">
    <div className="flex flex-col">
      <img src={secondNumber} alt="primo passo" className='h-20 mb-8 mobile:mb-0 '/>
      <p className="  text-customBlue medium:mt-4 medium:block text-2xl mobile:text-base mobile:hidden">
        Assumilo, fagli svolgere il lavoro richiesto nei tempi da voi prestabiliti.
      </p>
    </div>
  </div>
  <img
    alt=""
    src={secondStep}
    className="h-96 w-full object-cover mobile:hidden"
  />
  <p className="  text-customBlue medium:mt-4 medium:hidden mobile:block text-2xl mobile:text-base hidden">
        Assumilo, fagli svolgere il lavoro richiesto nei tempi da voi prestabiliti.
      </p>
</section>
</Slide>
</Fade>
{/* terzo */}
<Fade triggerOnce={true}>
      <Slide direction='right' duration={2500} triggerOnce={true}>
    <section className="overflow-hidden mobile:grid-cols-2 flex mt-12 px-8 mobile:px-4 mobile:flex ">
      
    <img
    alt=""
    src={thirdStep}
    className="h-96 w-full object-cover mobile:hidden"
  />
  
  
  <div className="flex flex-col mobile:pl-4 mobile:flex-row">
      <img src={thirdNumber} alt="primo passo" className='h-20 mb-8 mobile:mb-0 mobile:pl-12'/>
      <p className="  text-customBlue medium:mt-4 medium:block text-2xl mobile:text-base  pl-8">
        Paga il professionista con il metodo di pagamento che preferisci.
      </p>
    </div>
</section>
</Slide>
</Fade>
{/* quarto */}
<Fade triggerOnce={true}>
      <Slide direction='left' duration={2500} triggerOnce={true}>
    <section className="overflow-hidden mobile:grid mobile:grid-cols-2 flex mt-12 px-8 mobile:px-4">
  <div className=" p-8 medium:p-12 large:px-16 large:py-24 mobile:p-0 mobile:w-full mobile:pl-4  mobile:flex mobile:flex-row ">
 
      <img src={fourthNumber} alt="primo passo" className='h-20 mb-8 mobile:mb-0 mobile:ml-8 ml-36 medium:ml-16'/>
      <p className="  text-customBlue medium:mt-4 medium:block text-2xl mobile:text-base mobile:ml-12">
        Paga il professionista con il metodo di pagamento che preferisci.
      </p>
    
  </div>
  <div className=" flex-col mobile:pl-4 mobile:flex-row medium:hidden xl:hidden hidden">
      <img src={fourthNumber} alt="primo passo" className='h-20 mb-8 mobile:mb-0 mobile:pl-12 '/>
      <p className="  text-customBlue medium:mt-4 medium:block text-2xl mobile:text-base  pl-8">
        Paga il professionista con il metodo di pagamento che preferisci.
      </p>
    </div>
  <img
    alt=""
    src={fourthStep}
    className="h-96 w-full object-cover mobile:hidden"
  />
</section>
</Slide>
</Fade>
</Fade>

)
}

export default Steps