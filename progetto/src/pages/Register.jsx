import React from 'react'
import LogoCompleto from '../images/LogoCompleto.jpeg'
import RegistrationBanner from '../images/Registrazione-Banner.png'

function Register() {
  return (
<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src={RegistrationBanner}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </aside>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <a className="block text-blue-300" href="#">
        <img className="logo-registrazione" src={LogoCompleto} alt="Descrizione immagine" />
        </a>

        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Benvenuto su Find&Fix - Cliente
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
        Stai per registrarti come <strong>cliente</strong> del nostro sito. <br/>
        Completa tutti i campi e assicurati un'esperienza professionale.

        </p>

        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Nome" className="block text-sm font-medium text-gray-700">
              Nome
            </label>

            <input
              type="text"
              id="nome"
              name="nome"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Cognome" className="block text-sm font-medium text-gray-700">
              Cognome
            </label>

            <input
              type="text"
              id="cognome"
              name="cognome"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
              Conferma Password
            </label>

            <input
              type="password"
              id="confermapassword"
              name="confermapassword"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span className="text-sm text-gray-700">
                Voglio ricevere email riguardanti sconti, eventi e promozioni
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              Creando un account sono consapevole di accettare 
              <a href="#" className="text-gray-700 underline"> termini e condizioni </a>
              e
              <a href="#" className="text-gray-700 underline"> privacy policy</a>.
            </p> 
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Crea un account.
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Hai già un account ? 
              <a href="#" className="text-gray-700 underline"> Login</a>.
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Sei un professionista ?
              <a href="#" className="text-gray-700 underline"> Registrati come professionista</a>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
  )
}

export default Register