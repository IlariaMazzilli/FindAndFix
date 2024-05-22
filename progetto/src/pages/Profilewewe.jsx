import "./Prowewe.scss";

function UserPage() {
  return (
    <div className="container-user-page">
      <main className="page__course">
        <div className="container-page">
          <div className="course-content">
            <h1 className="name-user text-5xl">Sylvia Darqua</h1>
            <h2 className="profession text-customBlue text-2xl">Interior Designer</h2>

            <div className="content-block">
              <span className="label">Valutazione</span>
              <span className="stars">★★★★☆</span>
            </div>

            <div className="content-block w-full">
              <a className="send-a-message w-full ">
                <a
                  className="h-fit button rounded bg-customBlue px-5 py-2 text-mobile font-medium  text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 hover:bg-customGreen"
                  href="#"
                >
                  Contattami!

                </a>
                <button className="hover:scale-110  hover:customGreen"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="43" viewBox="0 0 16 16"><path fill="#0F5DA6" d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" /></svg>
                </button>
              </a>



              <a className="add_to_favorites ">

                {/* solo recensioni */}
              </a>
            </div>

            <div className="content-block">
              <ul id="tabs">
                <li className="active">
                  <a href="#">Descrizione</a>
                </li>
              </ul>

              <ul id="tab">
                <li className="active">
                  <p>
                    Immagina di varcare la soglia della tua casa e di essere avvolto da un'atmosfera calda e accogliente, perfettamente in linea con il tuo stile di vita e i tuoi gusti. 
                    Questo è ciò che posso realizzare per te come <b>interior designer esperta.</b>

                    Con anni di esperienza e una passione innata per il design, ho sviluppato un approccio unico che mi permette di creare ambienti unici e personalizzati, che rispecchiano al meglio la tua personalità e le tue esigenze.

                    Il mio lavoro non si limita alla semplice progettazione di interni. Dedico tempo e attenzione all'ascolto delle tue esigenze, dei tuoi gusti e del tuo stile di vita, per creare un progetto che sia un vero e proprio riflesso di te stesso.

                    Propongo <b>soluzioni di design creative e innovative</b>, che sfruttano al meglio lo spazio e le caratteristiche dell'ambiente. 
                    Pongo la <b>massima attenzione ai dettagli</b> , dalla scelta dei materiali alle finiture, per garantire un risultato impeccabile e raffinato.

                    Credo che un ambiente ben progettato non debba essere solo bello esteticamente, ma anche funzionale e confortevole. Per questo motivo, creo spazi che soddisfino le tue esigenze quotidiane, offrendoti un'esperienza di vita piacevole e serena.

                    Seguo il tuo progetto dall'ideazione alla realizzazione, coordinando tutti i fornitori e gli artigiani coinvolti, per garantirti un'esperienza senza stress e senza imprevisti.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <aside className="courseSidebar">
            <div className="courseSidebar__featureImage"></div>

            <ul className="courseStats">
              <li>
                <span className="label courseStats__label">Telefono</span>
                <span className="courseStats__divider"></span>
                <span className="courseStats__data">+39 357 145687</span>
              </li>
              <li>
                <span className="label courseStats__label">Email</span>
                <span className="courseStats__divider"></span>
                <span className="courseStats__data">sylvia@outlook.com</span>
              </li>
            </ul>
          </aside>
        </div>
      </main>

      <div className="tools">
        <a className="tools__"></a>
        <a className=""></a>
        <a></a>
      </div>
    </div>
  );
}

export default UserPage;
