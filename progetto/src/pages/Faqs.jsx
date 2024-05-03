import FotoFaqs from '../images/foto_faqs.png'
import Bannerfaqs from '../images/bannerfaqs.png'
import Footer from '../components/Footer'

function Faqs(){
    return(
        <>
        <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-10 lg:flex lg:h-50px lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold text-customBlue sm:text-5xl">
        FIND & FIX
        <strong className="font-extrabold text-customGreen sm:block"> FAQs </strong>
      </h1>
      <div className="mt-2 flex flex-wrap justify-center gap-4">
        <a href="#"
         className="mt-2 inline-block rounded bg-customBlue px-12 py-3 text-sm font-medium text-white transition hover:bg-customGreen focus:outline-none focus:ring"
         >
    SCOPRI DI PIU'
        </a>

    
      </div>
    </div>
  </div>
</section>


        <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
  <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-lg font-medium">QUANTO PAGO PER USUFRUIRE DEL SERVIZIO COME CLIENTE ?</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      Nulla. Il servizio per il cliente è gratuito. La percentuale viene calcolata dalla paga che percepisce il professionista.
    </p>
  </details>

  <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-lg font-medium">SONO TUTELATO IN CASO DI PROBLEMI CON IL PROFESSIONISTA ?</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
   Assolutamente si. Find&Fix assicura ai propri clienti la massima trasparenza e proefessionalità. Per qualsiasi problema potrete contattarci tramite il form di contatti e saremo a vostra disposizione dal Lunedi al Venerdi 9:00/17:00.
    </p>
  </details>

  <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-lg font-medium">POSSO PAGARE IN CONTANTI IL PROFESSIONISTA ?</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
   No. Per garantire la massima sicurezza sia per il cliente che per il professionista, è obbligatorio pagare tramite il sito. Qualsiasi altra forma di pagamento non sarà protetta dalla nostra garanzia.
    </p>
  </details>

  <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-lg font-medium">POSSO CANCELLARE UN APPUNTAMENTO ?</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
   E' possibile cancellare l'appuntamento entro massimo le 24 ore precedenti. Qualsiasi cancellazione che avviene successicamente è soggetta alle penali riportare nei Termini e Condizioni.
    </p>
  </details>

  <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-lg font-medium">SE SONO UN PROFESSIONISTA ED HO GIA' UN CONTRATTO POSSO ISCRIVERMI AL SITO ?</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
   Certo, trattandosi di prestazioni occasionali anche se hai già un lavoro puoi comunque registrarti al sito ed implementare i tuoi guadagni.
    </p>
  </details>
  <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-lg font-medium">QUAL E' LA COMMISSIONE CHE FIND&FIX PRELEVA DAL TOTALE ? </h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
   Find&Fix per il servizio offerto trattiene il 5% dalla paga totale che spetta al professionista.
    </p>
  </details>
</div>

<section className="bg-gray-50"> 
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
   
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
      <img
        alt=""
        src={FotoFaqs}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
    
      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">SIAMO A TUA DISPOSIZIONE</h2>

        <p className="mt-4 text-gray-600">
          Qualora avessi altri dubbi o incertezze, non esitare a contattarci.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-customBlue px-12 py-3 text-sm font-medium text-white transition hover:bg-customGreen focus:outline-none focus:ring"
        >
          CONTATTACI
        </a>
      </div>
    </div>
  </div>
</section>
<Footer/>


</>


    )
}

export default Faqs