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

      <Slide direction='right' duration={1500} triggerOnce={true}>
        <section className="overflow-hidden sm:grid-cols-2 flex mt-12 px-8 sm:px-4 sm:flex ">

          <img
            alt=""
            src={firstStep}
            className="h-96 w-full object-cover max-[540px]:hidden"
          />


          <div className="flex flex-col pl-4 sm:flex-row items-center">
            <img src={firstNumber} alt="primo passo" className='h-20 mb-8 sm:mb-0 sm:pl-12 min-[768px]:hidden' />
            <p className="  text-customBlue  md:block text-2xl sm:text-4xl sm:pl-4">
              Cerca il tuo professionista.
            </p>
          </div>
        </section>
      </Slide>
      {/* secondo */}
      <Fade triggerOnce={true}>
        <Slide direction='left' duration={1500} triggerOnce={true}>
          <section className="overflow-hidden sm:grid sm:grid-cols-2 flex mt-12 px-8 sm:px-4">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24 sm:p-0 sm:pl-4">
              <div className="flex flex-col">
                <img src={secondNumber} alt="primo passo" className='h-20 mb-8 sm:mb-0 min-[768px]:hidden' />
                <p className="  text-customBlue md:mt-4 md:block text-2xl sm:text-4xl sm:hidden">
                  Assumilo, fagli svolgere il lavoro richiesto nei tempi da voi prestabiliti.
                </p>
              </div>
            </div>
            <img
              alt=""
              src={secondStep}
              className="h-96 w-full object-cover max-[540px]:hidden"
            />
            <p className="  text-customBlue md:mt-4 md:hidden sm:block text-2xl sm:text-base hidden">
              Assumilo, fagli svolgere il lavoro richiesto nei tempi da voi prestabiliti.
            </p>
          </section>
        </Slide>
      </Fade>
      {/* terzo */}
      <Fade triggerOnce={true}>
        <Slide direction='right' duration={1500} triggerOnce={true}>
          <section className="overflow-hidden sm:grid-cols-2 flex mt-12 px-8 sm:px-4 sm:flex ">

            <img
              alt=""
              src={thirdStep}
              className="h-96 w-full object-cover max-[540px]:hidden "
            />


            <div className="flex flex-col sm:pl-4 sm:flex-row items-center">
              <img src={thirdNumber} alt="primo passo" className='h-20 mb-8 sm:mb-0 sm:pl-12 min-[768px]:hidden' />
              <p className="  text-customBlue md:mt-4 md:block text-2xl sm:text-4xl  pl-8">
                Paga il professionista con il metodo di pagamento che preferisci.
              </p>
            </div>
          </section>
        </Slide>
      </Fade>
      {/* quarto */}
      <Fade triggerOnce={true}>
        <Slide direction='left' duration={1500} triggerOnce={true}>
          <section className="overflow-hidden sm:grid sm:grid-cols-2 flex mt-12 px-8 sm:px-4">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24 sm:p-0  sm:pl-4">
              <div className="flex flex-col">
                <img src={fourthNumber} alt="primo passo" className='h-20 mb-8 sm:mb-0 min-[768px]:hidden' />
                <p className="  text-customBlue md:mt-4 md:block text-2xl sm:text-4xl sm:hidden">
                  Lascia una recensione per aiutare gli altri utenti a scegliere il professionista adatto.
                </p>
              </div>
            </div>
            <img
              alt=""
              src={fourthStep}
              className="h-96 w-full object-cover max-[540px]:hidden"
            />
            <p className="  text-customBlue md:mt-4 md:hidden sm:block text-2xl sm:text-base hidden">
              Lascia una recensione per aiutare gli altri utenti a scegliere il professionista adatto.
            </p>
          </section>
        </Slide>
      </Fade>
    </Fade>

  )
}

export default Steps