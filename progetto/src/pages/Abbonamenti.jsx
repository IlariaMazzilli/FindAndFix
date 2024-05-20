function Abbonamenti() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-customBlue sm:text-5xl font-lato">
              SELEZIONA IL TUO ABBONAMENTO
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-customGreen">
            Scegli il canone che fa per te. Investi su te stesso ed inizia a
            guadagnare.
          </p>
       
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
<div className="rounded-3xl p-8 ring-1 xl:p-10 ring-black bg-gray-100 hover:scale-105 transition duration-300">
              <h3
                id="tier-freelancer"
                className="text-2xl font-semibold leading-8 text-black font-lato"
              >
                PIANO MENSILE
              </h3>
              <p className="mt-4 text-sm leading-6 text-green-600">
                Canone mensile con i seguenti vantaggi:
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-customBlue">
                  €50
                </span>
                <span className="text-sm font-semibold leading-6 text-customBlue">
                  {" "}
                  / Mese
                </span>
              </p>
              <a
                href="#"
                aria-describedby="tier-freelancer"
                className="mt-6 block rounded-xl py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-600 text-white shadow-sm hover:bg-customBlue focus-visible:outline-orange-600"
              >
                ACQUISTA ORA
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-400"
              >
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Fino a 30 appuntamenti al mese.
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Fino a 24 ore d'attesa per il supporto.
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Appuntamenti fino a 50 km di distanza.
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-teal-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Garanzia fino al 50% del valore della prestazioone.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl p-8 ring-1 xl:p-10 ring-black bg-gray-100 hover:scale-105 transition duration-300">
              <h3
                id="tier-startup"
                className="text-2xl font-bold leading-8 text-gray-900 font-lato"
              >
                PIANO ANNUALE
              </h3>
              <p className="mt-4 text-sm leading-6 text-green-600">
                Piano annuale con molte più tutele e garanzie.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-customBlue">
                  € 500
                </span>
                <span className="text-sm font-semibold leading-6 text-customBlue">
                  /anno
                </span>
              </p>
              <a
                href="#"
                aria-describedby="tier-freelancer"
                className="mt-6 block rounded-xl py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-600 text-white shadow-sm hover:bg-customBlue focus-visible:outline-orange-600"
              >
                ACQUISTA ORA
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-pink-600"
              >
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Appuntamenti illimitati
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Supporto immediato H24
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Nessun limite di distanza
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Garanzia fino al 100% del valore della prestazione.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Abbonamenti;

