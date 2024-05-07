import React from "react";
import LogoCompleto from "../images/LogoCompleto.jpeg";
import BannerPro from "../images/Banner-Pro.png";

function ProRegister() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src={BannerPro}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <a className="block text-blue-300" href="#">
              <img
                className="logo-registrazione"
                src={LogoCompleto}
                alt="Descrizione immagine"
              />
            </a>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Benvenuto su Find&Fix - Professionista
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Stai per registrarti come <strong>professionista </strong>del
              nostro sito. <br />
              Completa tutti i campi ed inizia a guadagnare tramite i nostri
              servizi.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Nome"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="Cognome"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Conferma Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Conferma Password
                </label>

                <input
                  type="password"
                  id="confermapassword"
                  name="confermapassword"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="Città"
                  className="block text-sm font-medium text-gray-900"
                >
                  
                  Città
                </label>

                <select
                  name="città"
                  id="città"
                  className="mt-1 w-200 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                >
                  <option value="">Seleziona</option>
                  <option value="Agrigento">Agrigento</option>
                  <option value="Alessandria">Alessandria</option>
                  <option value="Ancona">Ancona</option>
                  <option value="Aosta">Aosta</option>
                  <option value="Arezzo">Arezzo</option>
                  <option value="Ascoli Piceno">Ascoli Piceno</option>
                  <option value="Asti">Asti</option>
                  <option value="Avellino">Avellino</option>
                  <option value="Bari">Bari</option>
                  <option value="Barletta-Andria-Trani">
                    Barletta-Andria-Trani
                  </option>
                  <option value="Belluno">Belluno</option>
                  <option value="Benevento">Benevento</option>
                  <option value="Bergamo">Bergamo</option>
                  <option value="Biella">Biella</option>
                  <option value="Bologna">Bologna</option>
                  <option value="Bolzano">Bolzano</option>
                  <option value="Brescia">Brescia</option>
                  <option value="Brindisi">Brindisi</option>
                  <option value="Cagliari">Cagliari</option>
                  <option value="Caltanissetta">Caltanissetta</option>
                  <option value="Campobasso">Campobasso</option>
                  <option value="Carbonia-Iglesias">Carbonia-Iglesias</option>
                  <option value="Caserta">Caserta</option>
                  <option value="Catania">Catania</option>
                  <option value="Catanzaro">Catanzaro</option>
                  <option value="Chieti">Chieti</option>
                  <option value="Como">Como</option>
                  <option value="Cosenza">Cosenza</option>
                  <option value="Cremona">Cremona</option>
                  <option value="Crotone">Crotone</option>
                  <option value="Cuneo">Cuneo</option>
                  <option value="Enna">Enna</option>
                  <option value="Fermo">Fermo</option>
                  <option value="Ferrara">Ferrara</option>
                  <option value="Firenze">Firenze</option>
                  <option value="Foggia">Foggia</option>
                  <option value="Forlì-Cesena">Forlì-Cesena</option>
                  <option value="Frosinone">Frosinone</option>
                  <option value="Genova">Genova</option>
                  <option value="Gorizia">Gorizia</option>
                  <option value="Grosseto">Grosseto</option>
                  <option value="Imperia">Imperia</option>
                  <option value="Isernia">Isernia</option>
                  <option value="La Spezia">La Spezia</option>
                  <option value="L'Aquila">L'Aquila</option>
                  <option value="Latina">Latina</option>
                  <option value="Lecce">Lecce</option>
                  <option value="Lecco">Lecco</option>
                  <option value="Livorno">Livorno</option>
                  <option value="Lodi">Lodi</option>
                  <option value="Lucca">Lucca</option>
                  <option value="Macerata">Macerata</option>
                  <option value="Mantova">Mantova</option>
                  <option value="Massa-Carrara">Massa-Carrara</option>
                  <option value="Matera">Matera</option>
                  <option value="Medio Campidano">Medio Campidano</option>
                  <option value="Messina">Messina</option>
                  <option value="Milano">Milano</option>
                  <option value="Modena">Modena</option>
                  <option value="Monza e della Brianza">
                    Monza e della Brianza
                  </option>
                  <option value="Napoli">Napoli</option>
                  <option value="Novara">Novara</option>
                  <option value="Nuoro">Nuoro</option>
                  <option value="Ogliastra">Ogliastra</option>
                  <option value="Olbia-Tempio">Olbia-Tempio</option>
                  <option value="Oristano">Oristano</option>
                  <option value="Padova">Padova</option>
                  <option value="Palermo">Palermo</option>
                  <option value="Parma">Parma</option>
                  <option value="Pavia">Pavia</option>
                  <option value="Perugia">Perugia</option>
                  <option value="Pesaro e Urbino">Pesaro e Urbino</option>
                  <option value="Pescara">Pescara</option>
                  <option value="Piacenza">Piacenza</option>
                  <option value="Pisa">Pisa</option>
                  <option value="Pistoia">Pistoia</option>
                  <option value="Pordenone">Pordenone</option>
                  <option value="Potenza">Potenza</option>
                  <option value="Prato">Prato</option>
                  <option value="Ragusa">Ragusa</option>
                  <option value="Ravenna">Ravenna</option>
                  <option value="Reggio Calabria">Reggio Calabria</option>
                  <option value="Reggio Emilia">Reggio Emilia</option>
                  <option value="Rieti">Rieti</option>
                  <option value="Rimini">Rimini</option>
                  <option value="Roma">Roma</option>
                  <option value="Rovigo">Rovigo</option>
                  <option value="Salerno">Salerno</option>
                  <option value="Sassari">Sassari</option>
                  <option value="Savona">Savona</option>
                  <option value="Siena">Siena</option>
                  <option value="Siracusa">Siracusa</option>
                  <option value="Sondrio">Sondrio</option>
                  <option value="Taranto">Taranto</option>
                  <option value="Teramo">Teramo</option>
                  <option value="Terni">Terni</option>
                  <option value="Torino">Torino</option>
                  <option value="Trapani">Trapani</option>
                  <option value="Trento">Trento</option>
                  <option value="Treviso">Treviso</option>
                  <option value="Trieste">Trieste</option>
                  <option value="Udine">Udine</option>
                  <option value="Varese">Varese</option>
                  <option value="Venezia">Venezia</option>
                  <option value="Verbano-Cusio-Ossola">
                    Verbano-Cusio-Ossola
                  </option>
                  <option value="Vercelli">Vercelli</option>
                  <option value="Verona">Verona</option>
                  <option value="Vibo Valentia">Vibo Valentia</option>
                  <option value="Vicenza">Vicenza</option>
                  <option value="Viterbo">Viterbo</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="Categoria"
                  className="block text-sm font-medium text-gray-900 ml-20"
                >
                  
                  Categoria
                </label>

                <select
                  name="categoria"
                  id="categoria"
                  className="mt-1 w-50 ml-20 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                >
                  <option value="">Seleziona</option>
                  <option value="Agrigento">Idraulico</option>
                  <option value="Agrigento">Elettricista</option>
                  <option value="Agrigento">Interior Designer</option>
                  <option value="Agrigento">Pittore</option>
                  <option value="Agrigento">Serramentista</option>
                  <option value="Agrigento">Giardiniere</option>
                  <option value="Agrigento">Pulizia e Igiene </option>
                  <option value="Agrigento">Traslocatore</option>
                  <option value="Agrigento">Architetto</option>
                  <option value="Agrigento">Falegname</option>
                  <option value="Agrigento">Informatica</option>
                  <option value="Agrigento">Piastrellista</option>

                </select>
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
                    Voglio ricevere email riguardanti sconti, eventi e
                    promozioni
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  Creando un account sono consapevole di accettare
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    termini e condizioni{" "}
                  </a>
                  e
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Crea un account.
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Hai già un account ?
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    Login
                  </a>
                  .
                </p>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Sei un cliente ?
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    Registrati come cliente
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default ProRegister;
